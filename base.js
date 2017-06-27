// Target is code written for Node 8+
module.exports = {

  "extends": "standard",

  "parser": "babel-eslint",

  "parserOptions": {
    "sourceType": "script"
  },

  "rules": {
    "semi": [2, "always"],
    "no-extra-semi": 2,
    "no-var": 2,
    "comma-dangle": ["error", "always-multiline"],
    "no-shadow": 0
  }

}
