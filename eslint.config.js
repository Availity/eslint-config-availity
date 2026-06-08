import base from './base.js';

export default [
  ...base,
  {
    ignores: ['coverage/', 'project/', 'esm-output/', '.yarn/'],
  },
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
      },
    },
    rules: {
      'import/no-unresolved': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/prefer-default-export': 'off',
      'no-restricted-exports': 'off',
    },
  },
];
