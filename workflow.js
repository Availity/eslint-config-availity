import browser from './browser.js';

export default browser.map((config) => {
  if (config.settings && config.settings['import/resolver']) {
    return {
      ...config,
      settings: {
        ...config.settings,
        'import/resolver': {
          'root-import': {
            rootPathPrefix: '@/',
            rootPathSuffix: 'project/app',
            extensions: ['.js', '.jsx', '.tsx', '.ts'],
          },
        },
      },
    };
  }
  return config;
});
