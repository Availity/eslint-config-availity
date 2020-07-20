# eslint-config-availity

> Shareable ESLint config for Availity projects designed to be used with [Prettier](https://github.com/prettier/prettier) and [Typescript](https://www.typescriptlang.org/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](http://opensource.org/licenses/MIT)
[![NPM Link](http://img.shields.io/npm/v/eslint-config-availity.svg?style=for-the-badge&logo=npm)](https://npmjs.org/package/eslint-config-availity)
[![Github Actions Link](https://github.com/availity/eslint-config-availity/workflows/ci-build/badge.svg)](https://github.com/Availity/eslint-config-availity)

## Installation

### Typescript

```bash
npx install-peerdeps --dev eslint-config-availity
```

### Vanilla

```bash
yarn add --dev eslint-config-availity
```

## Features

-   [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
-   [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
-   [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
-   [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
-   [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
-   [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
-   [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

## Usage

> Typescript is supported in both configurations

### Node w/ optional Typescript

```bash
# .eslintrc.yaml
extends: availity
```

### Browser (React) w/ Typescript

```bash
# .eslintrc.yaml
extends: availity/browser
```

### Workflow

Allows root imports in [@availity/workflow](https://github.com/Availity/availity-workflow) projects.

```bash
# .eslintrc.yaml
extends: availity/workflow
```

### Prettier

> Recommended settings

```js
{
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Contributing

-   `$ yarn`
-   Make necessary changes
-   Update `README.md` and `test.js` if necessary
-   Run `yarn run release`. This command uses [standard-version](https://github.com/conventional-changelog/standard-version) to automatically determine the version based on commits and generate a CHANGELOG
-   Run `git push --follow-tags origin <branch> && yarn publish` to publish

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
