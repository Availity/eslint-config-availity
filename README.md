# eslint-config-availity

> Shareable ESLint config for Availity projects

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/eslint-config-availity.svg?style=flat-square&label=npm)](https://npmjs.org/package/eslint-config-availity)
[![Build](https://img.shields.io/travis/Availity/eslint-config-availity.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/eslint-config-availity)

Configurations are split between server and client side.

* Node configuration is compatible with Node `v8.0.0`.
* Client side configuration is fully compatible with `ES2016` specification and assumes a transpiler like Babel for module support

## Installation

>
```bash
npm install eslint babel-eslint eslint-config-airbnb eslint-config-availity@next eslint-plugin-react eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-jsx-a11y@5 --save-dev
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
