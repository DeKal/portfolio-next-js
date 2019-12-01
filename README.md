[![Code Coverage](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/?branch=master)[![Build Status](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/badges/build.png?b=master)](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/build-status/master)

# DeKal Portfolio

Basically it is my profile :)

## Prerequisites

- Prefer Node >= v12.

- Install dependencies
`yarn`

## Installation

Use the yarn to install dependencies.

Use yarn to install dependencies.
```bash
yarn
```

## Development
### Dev
To Dev using
```bash
yarn dev
```
### Lint check
Use `eslint` to check Javascript code.
```bash
yarn lint
```
### StyleLint check
Use `stylelint` to check SCSS embedded in JS code.
```bash
yarn lint:css
```
### Dangerjs
DangerJs is running to check PRs info when pulling request.

### Testing
Testing is supported by Jester and using typescript.
## Config
- Jest config: `jest.config.js`
- Typescript config for jest: `jest.tsconfig.json`
- Jest init script: `enzyme.js`
## Running Test
- Run test `yarn test`
- Run test while developing `yarn test:watch`
- Run test coverage `yarn test:coverage`

### Release
## Release a version
Only release a version when git status is clean and on branch `master`.\
Use `auto-changelog` to generate CHANGELOG.md.
```bash
yarn release
```

## CD/CI
CD/CI is supported by **Circle.io**.\
Circle.io will run through (Looking at .circleci/config.yml for details)
- `yarn`
- `yarn danger ci`
- `yarn lint`
- `yarn lint:css`
- `yarn test:coverage`

## Config files
#### Prettier config: `.prettierrc`
#### Babel config: `.bababelrc`
#### Eslint config: `.eslintrc`
#### Stylelint config: `.stylelintrc`
#### VScode config: `jsconfig.json`
#### Nextjs config: `next.config.js`


## License
[MIT](https://choosealicense.com/licenses/mit/)
