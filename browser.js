const base = require('./base');

module.exports = {
  extends: ['airbnb', 'plugin:promise/recommended', 'plugin:jest/recommended', 'prettier', 'prettier/react'],

  plugins: ['promise', 'jest', 'promise'],

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
    'react/require-default-props': 0,
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: [
          {
            some: ['id', 'nesting'],
          },
        ],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  }),
};
