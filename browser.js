const base = require('./base');

module.exports = {
  parser: base.parser,
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'plugin:unicorn/recommended',
    'plugin:import/typescript'
  ],

  env: {
    browser: true,
    jest: true,
    'jest/globals': true,
    es6: true,
  },

  // eslint-disable-next-line unicorn/expiring-todo-comments
  // FIXME: how to test?
  // settings: {
  //   react: {
  //     version: 'detect',
  //   },
  // },

  plugins: ['promise', 'jest', 'promise', 'unicorn', 'react-hooks'],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      //  This goes away with babel-eslint@11 https://github.com/babel/babel-eslint/issues/662#issuecomment-459712913
      legacyDecorators: true,
      jsx: true,
    },
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

  overrides: [
    ...base.overrides,
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],

  rules: {
    ...base.rules,
    'unicorn/no-for-loop': 0,
    'react/sort-comp': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  },
};
