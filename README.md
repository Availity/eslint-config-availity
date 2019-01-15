# eslint-config-availity

> Shareable ESLint config for Availity projects designed to be used with [Prettier](https://github.com/prettier/prettier)

[![](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](http://opensource.org/licenses/MIT)
[![](http://img.shields.io/npm/v/eslint-config-availity.svg?style=for-the-badge&logo=npm)](https://npmjs.org/package/eslint-config-availity)
[![](https://img.shields.io/travis/Availity/eslint-config-availity.svg?style=for-the-badge)](https://travis-ci.org/Availity/eslint-config-availity)

## Installation

```bash
npm install eslint babel-eslint eslint-config-airbnb-base eslint-config-airbnb eslint-config-prettier eslint-config-availity@next eslint-plugin-react eslint-plugin-jest eslint-plugin-promise eslint-plugin-import eslint-plugin-jsx-a11y  --save-dev
```

## Usage

### Node

```bash
# .eslintrc.yaml
extends: availity
```

### Browser (React, Angular, etc)

```bash
# .eslintrc.yaml
extends: availity/browser
```

### Prettier

> Recommended settings

```
{
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Contributing

*   `npm install`
*   Make necessary changes
*   Update `README.md` and `test.js` if necessary
*   Run `npm run release`. This command  parses `angular` style commits using `conventional-changelog` to determine the next version for the packages
*   Alternatively, run `npm run release ${VERSION}` and the release script will use `${VERSION}` as the version number in `package.json`
*   Run `npm pulish` or `npm publish --tag=next` (if working on next release candidate)

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
