# AGENTS.md: eslint-config-availity (shared ESLint 9 flat config)

Shared ESLint config with Prettier and TypeScript support. It is the most widely used package in the workspace: about 45 repos depend on it. A change here is a change to all of them.

## Branches

- Default and PR target: `master`.
- Check `git branch --show-current` before editing.
- Never push to `master`. Work on a branch named `feature/<short-description>` or `fix/<short-description>`.

## Environment

- Node `^22.12 || ^24` (`.nvmrc` is 24).
- Yarn 4 (`packageManager: yarn@4.17.0`). Install with `yarn install --immutable`.
- ESM (`"type": "module"`). Keep it that way.

## Commands

| Task                              | Command             |
| --------------------------------- | ------------------- |
| Lint this repo                    | `yarn lint`         |
| Tests (Vitest)                    | `yarn test`         |
| Check Prettier and config overlap | `yarn eslint-check` |

Before you say a change is done, run `yarn lint` and `yarn test`. Then check at least one consumer if the change alters a rule (see below).

## Entry points and profiles

- Consumers import profiles such as `eslint-config-availity/workflow`. Confirm the exports in `package.json` before you rename or remove one.
- The `workflow` profile is paired with `@availity/workflow` v14. See the lockstep rule in `availity-workflow/AGENTS.md`.

## Blast radius (read before changing a rule)

- Rule changes can fail lint in every consumer on their next upgrade. Before you merge a stricter rule, run `npx eslint` against one or two consumers (for example `availity-starter-vite-typescript` or `extend-admin-ui`).
- Use a major version for removals and stricter rules. Use a minor for new rules that are off by default.
- Commit messages should say which rules changed, because consumers read them to decide whether an upgrade will break them.

## Commits

- Use conventional commits (`feat:`, `fix:`, and so on). The format is checked locally: `.husky/commit-msg` runs commitlint, using `commitlint.config.js`. The CI workflows do not run commitlint, so the local hook is the only check on commit message format. A commit that skips the hook, for example with `--no-verify`, is not checked anywhere. The type still drives version bumps, so use it correctly.

## Do not

- Do not add a second config flavor. Add a profile to this package instead.
- Do not add dependencies that consumers do not also need.
- Do not run any release or publish script locally.
