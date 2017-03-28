// Target is browser code written in ES6 using a transpiler like Babel
module.exports = {

  "extends": "./base.js",

  "env": {
    "browser": true,
    "es6": true
  },

  // Force ES6 module settings: http://www.2ality.com/2014/09/es6-modules-final.html
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },

  "globals": {
    "document": true,
    "navigator": true,
    "window": true,
    "__DEV__": true,
    "__TEST__": true,
    "__PROD__": true,
    "__STAGING__": true
  }
}
