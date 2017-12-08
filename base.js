module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb-base', 'plugin:promise/recommended', 'prettier'],

  plugins: ['promise'],

  parserOptions: {
    sourceType: 'script',
  },

  rules: {
    strict: 0,
    'no-var': 2,
    'no-shadow': 0,
    'arrow-body-style': 2,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/*.js', '**/*.spec.js', '**/*.test.js'],
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'function-paren-newline': 0,
  },
};
