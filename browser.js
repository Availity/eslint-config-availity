// Target is browser code written in ES6 using a transpiler like Babel
module.exports = {

  "extends": "./base.js",

  "parserOptions": {
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
