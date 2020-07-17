## Circle CI
In this project we use Circle CI to run:
1) DangerJS: Check if the Pull Request has enough information, so that we can do proper review to it.
2) Lint: Check if the **javascript** and **css** code is well-formatted. We use the standard of `prettier` in combination with `eslint` rules.
3) Testing: Check if any test are broken in new PR.

<img src="/docs/res/circleci.png?raw=true" width="800px">