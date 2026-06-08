import { fixupConfigRules } from '@eslint/compat';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { compat } from './compat.js';
import { baseRules, tsConfigs } from './base.js';

export default [
  ...fixupConfigRules(compat.extends('airbnb', 'plugin:import/typescript')),
  ...baseRules,
  {
    name: 'availity/browser',
    plugins: {
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
      },
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.ts', '.tsx', '.d.ts', '.json', '.jsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'import/extensions': ['.js', '.ts', '.tsx', '.mjs', '.jsx'],
      react: {
        version: 'detect',
      },
    },
    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prefer-dom-node-remove': 'off',
      'unicorn/prefer-dom-node-append': 'off',
      'react/sort-comp': 'off',
      camelcase: 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
      'react/require-default-props': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/forbid-prop-types': [
        'error',
        {
          forbid: ['any'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          mjs: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/prefer-default-export': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'warn',
    },
  },
  // TypeScript recommended rules
  ...tsConfigs,
  // Disable prop-types rule in .tsx files
  {
    name: 'availity/tsx-overrides',
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
  eslintConfigPrettier,
];
