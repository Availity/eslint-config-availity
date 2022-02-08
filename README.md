# eslint-config-availity

> Shareable ESLint config for Availity projects designed to be used with [Prettier](https://github.com/prettier/prettier) and [Typescript](https://www.typescriptlang.org/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](http://opensource.org/licenses/MIT)
[![NPM Link](http://img.shields.io/npm/v/eslint-config-availity.svg?style=for-the-badge&logo=npm)](https://npmjs.org/package/eslint-config-availity)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/availity/eslint-config-availity/ci-build?style=for-the-badge)

## Installation

### NPM

```bash
npm install --save-dev eslint-config-availity
```

### Yarn

```bash
yarn add --dev eslint-config-availity
```

> If you need TypeScript support then you will also need to include `typescript` as a `devDependency`

## Features

### Configs

-   [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
-   [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

### Plugins

-   [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
-   [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
-   [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
-   [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
-   [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
-   [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
-   [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

### TypeScript

-   [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
-   [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)

## Usage

> Typescript is supported in both configurations

### Node w/ optional Typescript

```yaml
# .eslintrc.yaml
extends: availity
```

### Browser (React) w/ Typescript

```yaml
# .eslintrc.yaml
extends: availity/browser
```

### Workflow

Allows root imports in [@availity/workflow](https://github.com/Availity/availity-workflow) projects.

```yaml
# .eslintrc.yaml
extends: availity/workflow
```

> If you are using TypeScript then you can take advantage of root imports with your `tsconfig.json`

### Prettier

Recommended settings

```json
{
    "printWidth": 120,
    "singleQuote": true,
    "trailingComma": "es5"
}
```

## Contributing

-   `yarn`
-   Make necessary changes
-   Update `README.md` and `test.js` if necessary
-   Commit your changes using the [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary) format
-   Push your changes and open a PR
-   A new version will be deployed automatically through the CI process

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
