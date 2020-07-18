# Bots

In this project we have 3 supported bots for: 
- DangerJS (DeKalDangerBot)
- Image Optimizer (ImgBot)
- Dependencies (Renovate)

## DangerJS
[Danger bot](https://github.com/DeKalDangerBot) is an internal bot, which is created only for the purpose of commenting and reporting the status of the PR after running through dangerJS. The process is simple, just create a new user account, and make sure to include that account as a collaboration for the target project. After that follows the document at https://danger.systems/js/guides/getting_started.html, and we are good to go.

### **Usage**
<img src="/docs/res/bots-danger.png?raw=true" width="600px">

We have set up multiple [rules](/dangerfile.js) for the bot:
1) Please include a description of your PR changes.
2) Please assign someone to merge this PR, and optionally include people who should review.
3) Requires one of these labels: [tag: new feature, tag: breaking change, tag: bug fix, tag: enhancement, tag: documentation, tag: internal] to be referenced in CHANGELOG.md
4) PR name should begin with a capital letter
5) Commit messages should begin with a capital letter
6) Commit message should be specific. Checkout [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)


## Image Optimizer
[ImgBot](https://github.com/marketplace/imgbot) is a friendly robot that optimizes your images and saves you time. Optimized images mean smaller file sizes without sacrificing quality. We are using this one is because we dont have the usage of CDN to optimize the image quality. Therefore for the project, we just try to use images with low quality but enough efficiency for users.

### **Usage**
<img src="/docs/res/bots-img.png?raw=true" width="600px">


## Dependencies
[Renovate](https://github.com/marketplace/renovate) is a bot managing and keeping our dependencies up-to-date. Basically, it will check for some interval if there are any new dependencies in our `package.json`. If there is any, it will automatically create a PR for us the evaluate and update the new dependency.

### **Usage** 
- PR to update new dependency

<img src="/docs/res/bots-renovate.png?raw=true" width="600px">

- With each PR, the CI/CD system will be triggered for us to check if is there any things broken in our new dependencies. Wola, no need for manual check if something is broken.

<img src="/docs/res/pull-request-ci-cd.png?raw=true" width="600px">
