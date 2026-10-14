# Contributing to eslint-config-availity

Thanks for helping improve the shared ESLint config. This package is used by about 45 Availity repositories, so changes here affect all of them. Please read this guide before opening a pull request.

## Prerequisites

- **Node.js** 22.12+ or 24 (see `engines` in `package.json`; `.nvmrc` is set to 24). We recommend [nvm](https://github.com/nvm-sh/nvm#readme) or [fnm](https://github.com/Schniz/fnm#readme) to manage versions.
- **Yarn 4**, managed by [Corepack](https://yarnpkg.com/corepack), which ships with Node.js.

```bash
corepack enable
```

## Setup

```bash
yarn install --immutable
```

Use `--immutable` so the install fails if `yarn.lock` would change. Do not edit `yarn.lock` by hand.

## Project layout

| Path                   | Purpose                                                                     |
| ---------------------- | --------------------------------------------------------------------------- |
| `base.js`              | Base profile (Node.js and CLI)                                              |
| `browser.js`           | Browser profile (React and TypeScript)                                      |
| `workflow.js`          | Workflow profile (`@availity/workflow` projects)                            |
| `testRunners.js`       | Opt-in test runner configs (`withJest`, `withVitest`, `withNodeTest`)       |
| `index.js`             | Main entry point, which re-exports the base profile and test runner exports |
| `tests/`               | Vitest suites and fixture files for each profile                            |
| `commitlint.config.js` | Commit message rules                                                        |

## Contributor workflow

1. **Create a branch** from `master`, named `feature/<short-description>` or `fix/<short-description>`. Do not push to `master`.
2. **Edit the config files.** Most changes go in `base.js`, `browser.js`, `workflow.js`, or `testRunners.js`.
3. **Add test coverage.** For a new or changed rule, add a case to `tests/rules.test.js` and update the matching fixture (`base-typescript.js`, `react-typescript.js`, `react.js`, `workflow.js`, `vitest-fixture.js`, `node-test-fixture.js`, or `jest.js`).
4. **Run lint and tests:**
    ```bash
    yarn lint
    yarn test
    ```
5. **Check Prettier compatibility.** This makes sure no rule conflicts with Prettier:
    ```bash
    yarn eslint-check
    ```
6. **Commit** using the [commit conventions](#commit-conventions) below. Commitlint runs locally through the Husky `commit-msg` hook.
7. **Push** your branch and open a pull request against `master`.

## Changing rules

This package is a shared dependency, so treat every rule change as a change to all consumers.

- **Adding a rule that is off by default** is a minor change. Use `feat:`.
- **Enabling a new error-level rule, or removing a rule or profile**, can make lint fail in consumers on their next upgrade. Use `feat!:` (or a `BREAKING CHANGE:` footer), which triggers a major release.
- **Fixing a rule's behavior** without changing what consumers must do is a `fix:`.
- **Say which rules changed** in the commit body or PR description. Consumers read these to judge whether an upgrade will break them.

Before merging a stricter rule, run ESLint against one or two consumers to see what would break. Good candidates are `availity-starter-vite-typescript` and `extend-admin-ui`.

Profiles are the public API. Do not add a second config flavor. Add a profile instead. Check the `exports` in `package.json` before renaming or removing an export.

## Commit conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The format is checked locally by the Husky `commit-msg` hook, which runs commitlint using `commitlint.config.js`.

CI does not run commitlint, so the local hook is the only check on commit message format. Keep the hook enabled. A commit that skips it, for example with `--no-verify`, is not checked anywhere.

| Prefix                         | Use for                                                  | Version bump |
| ------------------------------ | -------------------------------------------------------- | ------------ |
| `feat:`                        | New rules or features                                    | Minor        |
| `fix:`                         | Bug fixes                                                | Patch        |
| `feat!:` or `BREAKING CHANGE:` | Breaking changes, such as enabling new error-level rules | Major        |
| `chore:`                       | Dependency updates, CI, tooling                          | None         |

The commit type drives the version bump, so choose it carefully.

## Pull requests

- Target `master`.
- Describe which rules were added, changed, or removed, and which profiles they affect.
- Include the consumer check you ran for any rule change that could fail lint downstream.
- CI runs `yarn install --immutable`, `yarn lint`, `yarn test`, and `yarn eslint-check` on Node 22 and 24.

## Releases

Releases are automated with [Release Please](https://github.com/googleapis/release-please):

1. Merges to `master` are analyzed by Release Please, which keeps an open release PR. That PR updates `CHANGELOG.md` and the version in `package.json`.
2. Merge the release PR when you are ready to release. This creates a GitHub Release and tag.
3. The release workflow runs lint and tests, then publishes to npm with provenance using `npm publish --provenance`.

Do not run `npm publish`, `yarn publish`, or tagging by hand. If the automated release fails, the **Publish Release (Manual)** workflow in GitHub Actions can be run from the Actions tab as a fallback.
