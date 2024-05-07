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
    // Disable prop-types rule in .tsx files
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],

  rules: {
    ...base.rules,
    // Only warn when arrow function can use implicit return
    'arrow-body-style': ['warn', 'as-needed'],
    'unicorn/prefer-query-selector': 0,
    // Disable requiring class components to be created with same order
    'react/sort-comp': 0,
    // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    camelcase: 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    // Disable requiring every optional prop to have a default value
    'react/require-default-props': 0,
    // Check labels have an id to associate with an input
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    // Error when rules of hooks are broken
    'react-hooks/rules-of-hooks': 'error',
    // Warn when not all deps are in dep array
    'react-hooks/exhaustive-deps': 'warn',
    // Disable props not allowed to be spread
    'react/jsx-props-no-spreading': 0,
    // Error when 'any' prop-type is used
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    // Disable requiring React to be imported. Not needed with v17+ of React
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    // Make href required except when using Link component 'to' is accepted
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    // Do not require file extensions
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
    // Disabled. default export is not required
    'import/prefer-default-export': 0,
    // Allow component to be standard function or arrow function
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
  },
};
