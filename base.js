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
      ecmaVersion: 2020,
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

  parser: '@babel/eslint-parser',

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
    requireConfigFile: false,
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
    'no-restricted-syntax': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'unicorn/filename-case': 'off',
    'unicorn/no-empty-file': 'warn',
    'unicorn/empty-brace-spaces': 0,
    'unicorn/prefer-node-protocol': 0,
    'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: true }],
    'unicorn/no-nested-ternary': 0,
    'unicorn/prefer-math-trunc': 0,
    'unicorn/no-null': 0,
    'unicorn/number-literal-case': 0,
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-module': 0,
    'unicorn/prefer-dom-node-append': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-anonymous-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-underscore-dangle': 0,
    'promise/avoid-new': 0,
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
  },
};
