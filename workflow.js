import browser from './browser.js';
import { withVitest } from './testRunners.js';

export default [
  ...browser,
  ...withVitest,
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
    },
  },
  {
    ignores: ['dist/', 'static/'],
  },
];
