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
  ],

  env: {
    browser: true,
    jest: true,
    es6: true,
    node: false,
  },

  plugins: ['promise', 'jest', 'promise', 'unicorn', 'react-hooks'],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      legacyDecorators: true, //  This goes away with babel-eslint@11 https://github.com/babel/babel-eslint/issues/662#issuecomment-459712913
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
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      rules: base.overrides[0].rules,
    },
  ],

  rules: Object.assign({}, base.rules, {
    'react/sort-comp': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
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
