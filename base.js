module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb-base', 'plugin:promise/recommended', 'plugin:jest/recommended', 'plugin:unicorn/recommended', 'prettier'],

  plugins: ['promise', 'jest', 'unicorn'],

  parserOptions: {
    sourceType: 'script',
  },

  env: {
    jest: true,
  },

  rules: {
    strict: 0,
    'no-var': 2,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    "unicorn/import-index": "off",
    "unicorn/filename-case": "off",
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 0,
    'promise/avoid-new': 0,
  },
};
