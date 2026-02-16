import resolve from 'resolve';
import path from 'path';
import fs from 'fs';
import { fixupConfigRules } from '@eslint/compat';
import babelEslintParser from '@babel/eslint-parser';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import { compat } from './compat.js';

const resolveSync = resolve.sync;

const config = [
  ...fixupConfigRules(compat.extends('airbnb-base')),
  eslintPluginPromise.configs['flat/recommended'],
  eslintPluginJest.configs['flat/recommended'],
  eslintPluginUnicorn.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      parser: babelEslintParser,
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
      'unicorn/no-array-for-each': 'warn',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/switch-case-braces': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-string-replace-all': 'warn',
      'unicorn/prefer-at': 'warn',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-spread': 'warn',
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
  resolveSync('typescript', {
    basedir: path.resolve(fs.realpathSync(process.cwd()), 'node_modules'),
  });

  const { default: tseslint } = await import('typescript-eslint');

  config.push(
    ...tseslint.configs.recommended.map((c) => ({
      ...c,
      files: ['**/*.{ts,tsx}'],
    })),
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    }
  );
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') {
    throw error;
  }
}

export default config;
