module.exports = {

  'parser': 'babel-eslint',

  'extends': [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:promise/recommended'
  ],

  "plugins": [
    "node",
    "promise"
  ],

  'parserOptions': {
    'sourceType': 'script'
  },

  'rules': {
    'strict': 0,
    'semi': [2, 'always'],
    'no-extra-semi': 2,
    'no-var': 2,
    'comma-dangle': ['error', 'always-multiline'],
    'no-shadow': 0,
    'arrow-body-style': 2
  }

};
