import browser from './browser.js';

export default [
  ...browser,
  {
    name: 'availity/workflow',
    languageOptions: {
      globals: {
        __DEV__: true,
        __TEST__: true,
        __PROD__: true,
        __STAGING__: true,
      },
    },
    rules: {
      'import/no-unresolved': ['error', { ignore: ['^@/'] }],
      'import/extensions': 'off',
    },
  },
];
