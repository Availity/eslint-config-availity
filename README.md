# eslint-config-availity

> Shareable ESLint config for Availity projects

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/eslint-config-availity.svg?style=flat-square&label=npm)](https://npmjs.org/package/eslint-config-availity)
[![Build](https://img.shields.io/travis/Availity/eslint-config-availity.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/eslint-config-availity)

Configurations are split between server and client side for their respective ES2015 support.  

* Node configuration is compatible with https://nodejs.org/en/docs/es6/
* Client side configuration is fully compatible with ES2015 specification and assumes a transpiler like Babel 6+ for module support

## Installation

>
```bash
npm install eslint babel-eslint@6.x eslint-plugin-react eslint-config-availity@next --save-dev
```

## Usage

>
```bash
# .eslintrc
extends: eslint-config-availity
```

### Usage (React)

>
```bash
# .eslintrc
extends: eslint-config-availity/react
```

### Usage (Browser)

>
```bash
# .eslintrc
extends: eslint-config-availity/browser
```

## Dependencies

* [eslint](https://github.com/eslint/eslint)
* [babel-eslint](https://github.com/babel/babel-eslint)

## Optional Dependencies

* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

## Acknowledgments

+ [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

