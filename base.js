const recommendedTs = require('./ts-recommended');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],

  plugins: ['promise', 'jest', 'unicorn'],

  parserOptions: {
    sourceType: 'script',
  },

  env: {
    jest: true,
  },

  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
    },
  ],

  rules: {
    strict: 0,
    'no-var': 2,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'unicorn/import-index': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-node-remove': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 0,
    'promise/avoid-new': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
    'unicorn/prefer-node-append': 0,
  },
};
