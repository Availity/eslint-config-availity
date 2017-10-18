# eslint-config-availity

> Shareable ESLint config for Availity projects

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/eslint-config-availity.svg?style=flat-square&label=npm)](https://npmjs.org/package/eslint-config-availity)
[![Build](https://img.shields.io/travis/Availity/eslint-config-availity.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/eslint-config-availity)

Based on [eslint-config-airbnb](https://github.com/airbnb/javascript) with the following rules overridden:

- strict 
- semi
- no-extra-semi
- no-var
- comma-dangle
- no-shadow
- arrow-body-style
- no-param-reassign
- consistent-return
- arrow-parens
- import/no-extraneous-dependencies
- react/sort-comp
- react/jsx-filename-extension
- class-methods-use-this

## Installation

>
```bash
npm install eslint babel-eslint eslint-config-airbnb eslint-config-availity@next eslint-plugin-react eslint-plugin-promise eslint-plugin-jsx-a11y@5 --save-dev
```

## Usage Node

>
```bash
# .eslintrc.yaml
extends: eslint-config-availity
```

## Usage Browser (React, Angular, etc)

>
```bash
# .eslintrc.yaml
extends: eslint-config-availity/browser
```
## License
[MIT](./LICENSE)
