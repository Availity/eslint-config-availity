const browser = require('./browser');

module.exports = {
  ...browser,
  settings: {
    ...browser.settings,
    'import/resolver': {
      'root-import': {
        rootPathPrefix: '@/',
        rootPathSuffix: 'project/app',
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    },
  },
};
