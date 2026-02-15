const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat');
const eslintPluginPromise = require('eslint-plugin-promise');
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const eslintConfigPrettier = require('eslint-config-prettier');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const tseslint = require('typescript-eslint');
const globals = require('globals');
const { compat } = require('./compat');

const baseRules = require('./base').find((c) => c.rules && c.rules['no-var'])?.rules || {};

module.exports = [
  ...fixupConfigRules(compat.extends('airbnb', 'plugin:import/typescript')),
  eslintPluginPromise.configs['flat/recommended'],
  eslintPluginJest.configs['flat/recommended'],
  eslintPluginUnicorn.configs['flat/recommended'],
  eslintConfigPrettier,
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
      ...baseRules,
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
  // TypeScript recommended rules for ts/tsx files
  ...tseslint.configs.recommended.map((c) => ({
    ...c,
    files: ['**/*.{ts,tsx}'],
  })),
  // Disable prop-types rule in .tsx files
  {
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
];
