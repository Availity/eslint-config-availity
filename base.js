const resolve = require('resolve');
const path = require('path');
const fs = require('fs');

const overrides = [];

// Lint tsx only if typescript is installed
try {
  resolve.sync('typescript', {
    basedir: path.resolve(fs.realpathSync(process.cwd()), 'node_modules'),
  });

  overrides.push({
    files: ['*.{ts,tsx}'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      warnOnUnsupportedTypeScriptVersion: true,
    },
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
  });
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') {
    throw error;
  }
}

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],

  plugins: ['promise', 'jest', 'unicorn'],

  parserOptions: {
    sourceType: 'script',
  },

  env: {
    jest: true,
  },

  overrides,

  rules: {
    strict: 0,
    'no-var': 2,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'unicorn/import-index': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-nested-ternary': 0,
    'unicorn/no-null': 0,
    'unicorn/number-literal-case': 0,
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
