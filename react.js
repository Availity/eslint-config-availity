module.exports = {

  "extends": [
    "./browser.js",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],

  "plugins": [
    "react",
    "jsx-a11y"
  ],

  "rules": {

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error'

  }

}
