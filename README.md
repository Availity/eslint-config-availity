# eslint-config-availity

> Shareable ESLint flat config for Availity projects designed to be used with [Prettier](https://github.com/prettier/prettier) and [TypeScript](https://www.typescriptlang.org/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](http://opensource.org/licenses/MIT)
[![NPM Link](http://img.shields.io/npm/v/eslint-config-availity.svg?style=for-the-badge&logo=npm)](https://npmjs.org/package/eslint-config-availity)

## Installation

Requires Node 22+ and ESLint 9+.

```bash
yarn add --dev eslint-config-availity
```

> If you need TypeScript support, also include `typescript` as a `devDependency`.

## Profiles

This package provides three ESLint flat config profiles, each targeting a different environment:

### Base (`eslint-config-availity`)

For **Node.js and CLI projects**. Includes airbnb-base, Prettier compatibility, and plugins for promises, Jest/Vitest (auto-detected), and unicorn. Uses ESM (`sourceType: 'module'`) with `ecmaVersion: 'latest'`. If `typescript` is installed, TypeScript recommended rules are automatically applied to `.ts`/`.tsx` files. Enforces explicit file extensions in imports (required for Node ESM).

```js
import base from 'eslint-config-availity';

export default [...base];
```

### Browser (`eslint-config-availity/browser`)

For **React + TypeScript browser applications**. Extends the full Airbnb config (including React and JSX a11y rules), adds react-hooks, and uses the TypeScript parser. Includes all shared rules from the base profile without duplicating airbnb-base. TypeScript recommended rules are applied to `.ts`/`.tsx` files, `react/prop-types` is disabled for `.tsx` files, and `unicorn/prefer-module` is enforced. Import extensions are set to `'never'` (bundlers handle resolution).

```js
import browser from 'eslint-config-availity/browser';

export default [...browser];
```

### Workflow (`eslint-config-availity/workflow`)

For projects scaffolded with **[@availity/workflow](https://github.com/Availity/availity-workflow)**. Extends the browser profile and adds workflow-specific configuration: the `@/` root-import resolver (mapped to `project/app`) and webpack DefinePlugin globals (`__DEV__`, `__TEST__`, `__PROD__`, `__STAGING__`).

```js
import workflow from 'eslint-config-availity/workflow';

export default [...workflow];
```

## Usage

This package exports [ESLint flat configs](https://eslint.org/docs/latest/use/configure/configuration-files). Create an `eslint.config.js` in your project root.

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
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) (auto-detected)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [@vitest/eslint-plugin](https://github.com/vitest-dev/eslint-plugin-vitest) (auto-detected)
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

ƒ

### Setup

```bash
yarn          # Install dependencies
yarn lint     # Run ESLint
yarn test     # Run tests
```

### Development workflow

1. Create a branch from `master`
2. Make changes to config files (`base.js`, `browser.js`, `workflow.js`)
3. If adding or modifying a rule, add corresponding test coverage in `tests/rules.test.js` and the relevant fixture file
4. Run `yarn lint && yarn test` to verify
5. Run `yarn eslint-check` to ensure no rules conflict with Prettier
6. Commit using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) (enforced by commitlint)
7. Push and open a PR

### Commit conventions

- `feat:` — New rules or features (triggers minor version bump)
- `fix:` — Bug fixes (triggers patch version bump)
- `feat!:` or `BREAKING CHANGE:` — Breaking changes like enabling new error-level rules (triggers major version bump)
- `chore:` — Dependency updates, CI changes (no version bump)

## License

[MIT](./LICENSE)
