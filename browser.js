// Target is browser code written in ES6 using a transpiler like Babel
const base = require('./base');

module.exports = {

  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:import/recommended',
  ],

  plugins: [
    'promise',
    'import',
  ],

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
  },

  globals: {
    document: true,
    navigator: true,
    window: true,
    __DEV__: true,
    __TEST__: true,
    __PROD__: true,
    __STAGING__: true,
  },

  rules: Object.assign({}, base.rules, {
    'react/sort-comp': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  }),
};
