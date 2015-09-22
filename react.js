/**
 * Created by jferrer on 9/22/15.
 */

module.exports = {
    "extends": "./index",
    "parser": "babel-eslint",
    "plugin": ["react"],
    "ecmaFeatures":{"jsx": false},
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "arrow-parens": 0,
        "arrow-spacing": 0,
        "constructor-super": 0,
        "generator-star-spacing": 0,
        "no-class-assign": 0,
        "no-const-assign": 0,
        "no-this-before-super": 0,
        "no-var": 2,
        "object-shorthand": 0,
        "prefer-const": 0,
        "prefer-spread": 0,
        "prefer-reflect": 0,
        "react/display-name": 0,
        "react/jsx-boolean-value": 2,
        "react/jsx-curly-spacing": 0,
        "react/jsx-no-duplicate-props": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-quotes": 2,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-danger": 0,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-multi-comp": 0,
        "react/no-unknown-property": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/require-extension": 0,
        "react/self-closing-comp": 2,
        "react/sort-comp": 0,
        "react/wrap-multilines": 2,
        "require-yield": 0
    }
}