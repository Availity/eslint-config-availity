const resolve = require('resolve');
const path = require('path');
const fs = require('fs');
const { fixupConfigRules } = require('@eslint/compat');
const eslintPluginPromise = require('eslint-plugin-promise');
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');
const { compat } = require('./compat');

const config = [
  ...fixupConfigRules(compat.extends('airbnb-base')),
  eslintPluginPromise.configs['flat/recommended'],
  eslintPluginJest.configs['flat/recommended'],
  eslintPluginUnicorn.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        sourceType: 'script',
        requireConfigFile: false,
      },
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      strict: 0,
      'no-var': 2,
      'no-shadow': 0,
      'no-param-reassign': 0,
      'no-restricted-syntax': 0,
      'global-require': 0,
      'class-methods-use-this': 0,
      'default-param-last': 1,
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
      'unicorn/no-negated-condition': 0,
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
  },
];

// Lint ts/tsx only if typescript is installed
try {
  resolve.sync('typescript', {
    basedir: path.resolve(fs.realpathSync(process.cwd()), 'node_modules'),
  });

  const tseslint = require('typescript-eslint');

  config.push(
    ...tseslint.configs.recommended.map((c) => ({
      ...c,
      files: ['**/*.{ts,tsx}'],
    }))
  );
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') {
    throw error;
  }
}

module.exports = config;
