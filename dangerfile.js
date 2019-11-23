import { danger, fail, markdown } from 'danger'

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 8) {
  fail('Please include a description of your PR changes.')
}

// Check that someone has been assigned to this PR
if (danger.github.pr.assignee === null) {
  fail(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  )
}

const lernaConfigs = require('./lerna.json')

const { labels } = lernaConfigs.changelog

const { issue, pr, commits } = danger.github

// check sentence case
const firstChar = pr.title[0]
if (firstChar.toUpperCase() !== firstChar) {
  fail('PR name should begin with a capital letter')
}

// should have a specified tag to be referenced in CHANGELOG.md
const availableLabels = Object.keys(labels)
const assignedLabels = issue.labels
  .map(label => label.name)
  .filter(name => availableLabels.indexOf(name) !== -1)

if (!assignedLabels.length) {
  fail(
    `Requires one of these labels: [\`${availableLabels.join(
      '`, `'
    )}\`] to be referenced in CHANGELOG.md`
  )
}

const uncapitalizedCommits = commits
  .map(commit => commit.commit.message)
  .filter(message => message[0].toUpperCase() !== message[0])
if (uncapitalizedCommits.length) {
  fail(
    `Commit messages should begin with a capital letter: [\`${uncapitalizedCommits.join(
      '`, `'
    )}\`]`
  )
}

// commit message should be specific
const badCommitMessageExamples = [
  'Fix test',
  'Fix eslint',
  'Fix bugs',
  'Fix comments',
  'Bug fixes'
]
const badCommitMessages = commits
  .map(commit => commit.commit.message)
  .filter(message => badCommitMessageExamples.indexOf(message) !== -1)

if (badCommitMessages.length) {
  markdown(
    `Commit message should be specific. Checkout [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)`
  )
}
