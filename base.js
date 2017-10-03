module.exports = {

  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:promise/recommended',
  ],

  plugins: [
    'node',
    'promise',
  ],

  parserOptions: {
    sourceType: 'script',
  },

  rules: {
    strict: 0,
    semi: [2, 'always'],
    'no-extra-semi': 2,
    'no-var': 2,
    'comma-dangle': ['error', 'always-multiline'],
    'no-shadow': 0,
    'arrow-body-style': 2,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': [
      'error', { devDependencies: ['**/test/*.js', '**/*.spec.js', '**/*.test.js'] },
    ],
  },
};
