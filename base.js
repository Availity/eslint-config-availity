module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb-base', 'plugin:promise/recommended', 'plugin:jest/recommended', 'prettier','plugin:unicorn/recommended'],

  plugins: ['promise', 'jest'],

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
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 0,
    'promise/avoid-new': 0,
  },
};
