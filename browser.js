const base = require('./base');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/typescript',
    'prettier',
  ],

  env: {
    browser: true,
    jest: true,
    'jest/globals': true,
    es6: true,
  },

  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.d.ts', '.json', '.jsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.tsx', '.mjs', '.jsx'],
    react: {
      version: 'detect',
    },
  },

  plugins: ['promise', 'jest', 'unicorn', 'react-hooks', '@typescript-eslint', 'import'],

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
    'unicorn/prefer-query-selector': 0,
    'react/sort-comp': 0,
    // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
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
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
  },
};
