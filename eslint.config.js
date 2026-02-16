import base from './base.js';

export default [
  ...base,
  {
    ignores: ['coverage/', 'project/', 'esm-output/'],
  },
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
      },
    },
    rules: {
      'import/no-unresolved': ['error', { ignore: ['typescript-eslint'] }],
      'import/extensions': ['error', 'ignorePackages', { js: 'always' }],
      'import/prefer-default-export': 'off',
      'no-restricted-exports': 'off',
    },
  },
];
