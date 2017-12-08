# eslint-config-availity

> Shareable ESLint config for Availity projects designed to be used with [Prettier](https://github.com/prettier/prettier)

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/eslint-config-availity.svg?style=flat-square&label=npm)](https://npmjs.org/package/eslint-config-availity)
[![Build](https://img.shields.io/travis/Availity/eslint-config-availity.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/eslint-config-availity)

## Installation

```bash
npm install eslint babel-eslint@latest eslint-config-airbnb-base eslint-config-airbnb eslint-config-prettier eslint-config-availity@next eslint-plugin-react eslint-plugin-promise eslint-plugin-import eslint-plugin-jsx-a11y@latest  --save-dev
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

## Prettier
> Recommended settings
```
{
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## License
[MIT](./LICENSE)
