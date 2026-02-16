import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { compat } from './compat.js';
import base from './base.js';

export default [
  ...fixupConfigRules(compat.extends('airbnb', 'plugin:import/typescript')),
  eslintPluginPromise.configs['flat/recommended'],
  eslintPluginJest.configs['flat/recommended'],
  eslintConfigPrettier,
  ...base,
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooksPlugin),
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        ecmaVersion: 2020,
        presets: ['@babel/preset-react'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.es2020,
        __DEV__: true,
        __TEST__: true,
        __PROD__: true,
        __STAGING__: true,
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
      'unicorn/prefer-query-selector': 0,
      'react/sort-comp': 0,
      camelcase: 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
      'react/require-default-props': 0,
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-props-no-spreading': 0,
      'react/forbid-prop-types': [
        'error',
        {
          forbid: ['any'],
        },
      ],
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
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
      'import/prefer-default-export': 0,
      'react/function-component-definition': [
        2,
        {
          namedComponents: ['function-declaration', 'arrow-function'],
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'warn',
    },
  },
  // TS recommended rules are already included via base.js
  // Disable prop-types rule in .tsx files
  {
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
];
