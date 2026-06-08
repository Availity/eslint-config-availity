import { describe, test, expect } from 'vitest';
import { ESLint } from 'eslint';
import baseConf from '../index.js';
import reactConf from '../browser.js';
import workflowConf from '../workflow.js';
import reactString from './react.js';
import reactTsString from './react-typescript.js';
import baseString from './base.js';
import baseTsString from './base-typescript.js';
import workflowString from './workflow.js';

async function runEslint(string, configuration, fileName) {
  const linter = new ESLint({
    overrideConfigFile: true,
    overrideConfig: configuration,
  });

  const results = await linter.lintText(string, { filePath: fileName });

  return results[0].messages;
}

const findRule = (errors, rule) => errors.find(({ ruleId }) => ruleId === rule);
const ruleIds = (errors) => errors.map((e) => e.ruleId).toSorted();

describe('rules', () => {
  test('base', async () => {
    expect(Array.isArray(baseConf)).toBe(true);

    const errors = await runEslint(baseString(), baseConf);

    expect(ruleIds(errors)).toMatchSnapshot();

    // Enabled rules (should fire)
    expect(findRule(errors, 'no-var')).toBeDefined();
    expect(findRule(errors, 'no-unused-vars')).toBeDefined();
    expect(findRule(errors, 'default-param-last')).toBeDefined();
    expect(findRule(errors, 'unicorn/no-array-for-each')).toBeDefined();
    expect(findRule(errors, 'unicorn/prefer-string-replace-all')).toBeDefined();
    expect(findRule(errors, 'unicorn/prefer-at')).toBeDefined();
    expect(findRule(errors, 'unicorn/prefer-spread')).toBeDefined();

    // no-unused-vars should ignore rest siblings
    const foundSibling = errors.some(
      (element) => element.ruleId === 'no-unused-vars' && element.message.includes('ignoredAttribute')
    );
    expect(foundSibling).toBe(false);

    // Disabled rules (should NOT fire)
    expect(findRule(errors, 'no-shadow')).toBeUndefined();
    expect(findRule(errors, 'no-param-reassign')).toBeUndefined();
    expect(findRule(errors, 'class-methods-use-this')).toBeUndefined();
    expect(findRule(errors, 'no-plusplus')).toBeUndefined();
    expect(findRule(errors, 'no-underscore-dangle')).toBeUndefined();
    expect(findRule(errors, 'no-restricted-syntax')).toBeUndefined();
    expect(findRule(errors, 'global-require')).toBeUndefined();
    expect(findRule(errors, 'strict')).toBeUndefined();
    expect(findRule(errors, 'promise/avoid-new')).toBeUndefined();
    expect(findRule(errors, 'prefer-destructuring')).toBeUndefined();
    expect(findRule(errors, 'import/no-extraneous-dependencies')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-includes')).toBeUndefined();
    expect(findRule(errors, 'unicorn/numeric-separators-style')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-math-trunc')).toBeUndefined();
    expect(findRule(errors, 'unicorn/no-null')).toBeUndefined();
    expect(findRule(errors, 'unicorn/number-literal-case')).toBeUndefined();
    expect(findRule(errors, 'unicorn/no-nested-ternary')).toBeUndefined();
    expect(findRule(errors, 'unicorn/empty-brace-spaces')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-node-protocol')).toBeDefined();
    expect(findRule(errors, 'unicorn/prevent-abbreviations')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-module')).toBeUndefined();
    expect(findRule(errors, 'unicorn/no-array-reduce')).toBeUndefined();
    expect(findRule(errors, 'unicorn/no-negated-condition')).toBeUndefined();
    expect(findRule(errors, 'unicorn/no-useless-undefined')).toBeUndefined();
    expect(findRule(errors, 'unicorn/switch-case-braces')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-global-this')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-ternary')).toBeUndefined();
  });

  test('base typescript', async () => {
    const errors = await runEslint(baseTsString(), baseConf, 'example.ts');

    expect(ruleIds(errors)).toMatchSnapshot();

    // Enabled TS rules via base config
    expect(findRule(errors, '@typescript-eslint/no-wrapper-object-types')).toBeDefined();
    expect(findRule(errors, '@typescript-eslint/no-explicit-any')).toBeDefined();
    expect(findRule(errors, '@typescript-eslint/no-unused-vars')).toBeDefined();

    // @typescript-eslint/no-unused-vars should ignore rest siblings
    const foundIgnored = errors.some(
      (element) => element.ruleId === '@typescript-eslint/no-unused-vars' && element.message.includes('ignored')
    );
    expect(foundIgnored).toBe(false);
  });

  test('react', async () => {
    expect(Array.isArray(reactConf)).toBe(true);

    const errors = await runEslint(reactString(), reactConf);

    expect(ruleIds(errors)).toMatchSnapshot();

    // Enabled rules (should fire)
    expect(findRule(errors, 'react/forbid-prop-types')).toBeDefined();
    expect(findRule(errors, 'arrow-body-style')).toBeDefined();
    expect(findRule(errors, 'react-hooks/rules-of-hooks')).toBeDefined();
    expect(findRule(errors, 'react/function-component-definition')).toBeDefined();
    expect(findRule(errors, 'react-hooks/exhaustive-deps')).toBeDefined();
    expect(findRule(errors, 'unicorn/prefer-module')).toBeDefined();

    // Disabled rules (should NOT fire)
    expect(findRule(errors, 'react/sort-comp')).toBeUndefined();
    expect(findRule(errors, 'react/require-default-props')).toBeUndefined();
    expect(findRule(errors, 'react/jsx-props-no-spreading')).toBeUndefined();
    expect(findRule(errors, 'react/react-in-jsx-scope')).toBeUndefined();
    expect(findRule(errors, 'jsx-a11y/anchor-is-valid')).toBeUndefined();
    expect(findRule(errors, 'jsx-a11y/label-has-associated-control')).toBeUndefined();
    expect(findRule(errors, 'camelcase')).toBeUndefined();
    expect(findRule(errors, 'import/prefer-default-export')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-query-selector')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-dom-node-remove')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-dom-node-append')).toBeUndefined();
  });

  test('typescript', async () => {
    const errors = await runEslint(reactTsString(), reactConf, 'example.tsx');

    expect(ruleIds(errors)).toMatchSnapshot();

    // Enabled rules (should fire)
    expect(findRule(errors, '@typescript-eslint/no-wrapper-object-types')).toBeDefined();
    expect(findRule(errors, '@typescript-eslint/no-unused-vars')).toBeDefined();
    expect(findRule(errors, '@typescript-eslint/no-explicit-any')).toBeDefined();
    expect(findRule(errors, '@typescript-eslint/no-use-before-define')).toBeDefined();

    // Disabled rules (should NOT fire)
    expect(findRule(errors, 'react/prop-types')).toBeUndefined();
    expect(findRule(errors, 'react/jsx-props-no-spreading')).toBeUndefined();
    expect(findRule(errors, 'no-use-before-define')).toBeUndefined();
  });

  test('workflow', async () => {
    const errors = await runEslint(workflowString(), workflowConf, 'example.tsx');

    expect(ruleIds(errors)).toMatchSnapshot();

    // Disabled — root-import resolver handles @/ paths
    expect(findRule(errors, 'import/no-unresolved')).toBeUndefined();

    // Workflow globals should not trigger no-undef
    expect(findRule(errors, 'no-undef')).toBeUndefined();
  });
});
