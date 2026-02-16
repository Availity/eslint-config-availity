# eslint-config-availity

> Shareable ESLint flat config for Availity projects designed to be used with [Prettier](https://github.com/prettier/prettier) and [TypeScript](https://www.typescriptlang.org/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](http://opensource.org/licenses/MIT)
[![NPM Link](http://img.shields.io/npm/v/eslint-config-availity.svg?style=for-the-badge&logo=npm)](https://npmjs.org/package/eslint-config-availity)

## Installation

Requires Node 20+ and ESLint 9+.

```bash
yarn add --dev eslint-config-availity
```

> If you need TypeScript support, also include `typescript` as a `devDependency`.

## Usage

This package exports [ESLint flat configs](https://eslint.org/docs/latest/use/configure/configuration-files). Create an `eslint.config.js` in your project root.

### Workflow (for [@availity/workflow](https://github.com/Availity/availity-workflow) projects)

```js
import workflow from 'eslint-config-availity/workflow';

export default [
  ...workflow,
];
```

### Browser (React + TypeScript)

```js
import browser from 'eslint-config-availity/browser';

export default [
  ...browser,
];
```

### Base (Node)

```js
import base from 'eslint-config-availity';

export default [
  ...base,
];
```

### Adding project-specific rules

```js
import workflow from 'eslint-config-availity/workflow';

export default [
  ...workflow,
  {
    rules: {
      'no-console': 'warn',
    },
  },
  {
    ignores: ['**/static/*'],
  },
];
```

## Migrating from `.eslintrc`

If upgrading from a previous version, see the [@availity/workflow upgrade guide](https://github.com/Availity/availity-workflow/blob/master/UPGRADE.md). The `@availity/workflow-upgrade` tool automates the migration from `.eslintrc` to `eslint.config.js`.

## Included Configs and Plugins

### Configs

- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (via [@eslint/compat](https://github.com/eslint/rewrite/tree/main/packages/compat))
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

### Plugins

- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [typescript-eslint](https://typescript-eslint.io/) (v8)

### Prettier

Recommended settings:

```json
{
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Contributing

- `yarn`
- Make necessary changes
- Update `README.md` and `rules.test.js` if necessary
- Commit using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary)
- Push and open a PR

## License

[MIT](./LICENSE)
