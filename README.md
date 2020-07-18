[![Code Coverage](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/badges/build.png?b=master)](https://scrutinizer-ci.com/g/DeKal/portfolio-next-js/build-status/master)

# [DeKal Portfolio](https://dekal.github.io/portfolio-next-js/)
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

## Config files
A list of configs can be found at [Configs](/docs/configs.md).

## Development
- To Dev using
```bash
yarn dev
```
- To run in production mode using:
```bash
yarn build
yarn start
```

## Lint check
Use `eslint` to check Javascript code.
```bash
yarn lint
```

Use `stylelint` to check SCSS embedded in JS code.
```bash
yarn lint:css
```

## Testing
Testing is supported by Jester and using typescript. To run test using:
- Run test `yarn test`
- Run test while developing `yarn test:watch`
- Run test coverage `yarn test:coverage`

## Release
Only release a version when git status is clean and on branch `master`.\
Use `auto-changelog` to generate [CHANGELOG.md](/CHANGELOG.md).
```bash
yarn release
```

## Deployment
Deployment was handled by [Vercel](https://vercel.com/dashboard) Deploy, Preview and Ship (DPS). 

See detail at [Deployment](/docs/deployment.md)

## CircleCI
CI is supported by **Circle.io**. 

See detail at [CircleCI Guide](/docs/circleci.md).

## Scrutinizer
Code Quality and assurance are supported by **Scrutinizer**. 

See detail at [Scrutinizer Guide](/docs/scrutinizer.md).

## Supportive Bots
Bots are used for maintaining dependencies, optimizing images and quality control PRs. 

See detail at [Bots](/docs/bots.md).

## Lighthouse
Running with Google Lighthouse for performance measuring.

See detail at [Lighthouse](/docs/light-house.md).

## License
[MIT](https://choosealicense.com/licenses/mit/)
