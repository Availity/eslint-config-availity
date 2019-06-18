const {
  configs: { recommended },
} = require('@typescript-eslint/eslint-plugin');

const prettierTs = require('eslint-config-prettier/@typescript-eslint');
const base = require('./browser');

module.exports = {
  ...base,
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],

      // TODO: remove when eslint 6.0 is released with https://github.com/eslint/eslint/pull/11554.
      // Aftewards, just extend plugins like above.
      rules: Object.assign(recommended.rules, prettierTs.rules, {
        '@typescript-eslint/no-unused-vars': 'off',
      }),
    },
  ],
};
