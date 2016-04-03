// Target is browser code written in ES6 using a transpiler like Babel
module.exports = {

  'extends': './base',

  'env': {
    'browser': true,
    'es6': true
  },

  // Force ES6 module settings: http://www.2ality.com/2014/09/es6-modules-final.html
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': false
    }
  },

  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },

}
