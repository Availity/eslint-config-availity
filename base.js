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
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    'promise/avoid-new': 0,
  },
};
