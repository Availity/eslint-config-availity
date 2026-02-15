const base = require('./base');

module.exports = [
  ...base,
  {
    ignores: ['coverage/', 'project/'],
  },
  {
    rules: {
      'import/no-unresolved': ['error', { ignore: ['typescript-eslint'] }],
    },
  },
];
