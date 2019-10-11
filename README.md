# eslint-config-availity

> Shareable ESLint config for Availity projects designed to be used with [Prettier](https://github.com/prettier/prettier) and [Typescript](https://www.typescriptlang.org/)

[![](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](http://opensource.org/licenses/MIT)
[![](http://img.shields.io/npm/v/eslint-config-availity.svg?style=for-the-badge&logo=npm)](https://npmjs.org/package/eslint-config-availity)
[![](https://img.shields.io/travis/Availity/eslint-config-availity.svg?style=for-the-badge)](https://travis-ci.org/Availity/eslint-config-availity)

## Installation

```bash
npm install eslint-config-availity --save-dev
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

### Node

```bash
# .eslintrc.yaml
extends: availity
```

### Browser (React, Angular)

```bash
# .eslintrc.yaml
extends: availity/browser
```

### Typescript
```bash
# .eslintrc.yaml
extends: availity/browser
```

### Workflow

Allows root imports in `@availity/workflow` projects.
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

-   `npm install`
-   Make necessary changes
-   Update `README.md` and `test.js` if necessary
-   Run `npm run release`. This command parses `angular` style commits using `conventional-changelog` to determine the next version for the packages
-   Alternatively, run `npm run release ${VERSION}` and the release script will use `${VERSION}` as the version number in `package.json`
-   Run `npm publish` or `npm publish --tag=next` (if working on next release candidate)

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
