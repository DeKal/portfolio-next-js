import { danger, warn } from 'danger'

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.')
}

// Check for a CHANGELOG entry
const hasChangelog = danger.git.modified_files.some(f => f === 'CHANGELOG.md')
const description = danger.github.pr.body + danger.github.pr.title
const isTrivial = description.includes('#trivial')

if (!hasChangelog && !isTrivial) {
  warn('Please add a changelog entry for your changes.')
}

// Check that someone has been assigned to this PR
if (danger.github.pr.assignee === null) {
  warn(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  )
}
