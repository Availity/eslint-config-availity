import { ESLint } from 'eslint';
import baseConf from '../index.js';
import reactConf from '../browser.js';
import workflowConf from '../workflow.js';
import reactString from './react.js';
import reactTsString from './react-typescript.js';
import baseString from './base.js';
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

const isArray = (value) => Array.isArray(value);

describe('rules', () => {
  test('base', async () => {
    expect(isArray(baseConf)).toBeTruthy();

    const errors = await runEslint(baseString(), baseConf);

    const foundSibling = errors.some(
      (element) => element.ruleId === 'no-unused-vars' && element.message.includes('ignoredAttribute')
    );

    // Enabled
    expect(findRule(errors, 'no-var')).toBeDefined();
    expect(findRule(errors, 'no-unused-vars')).toBeDefined();
    expect(findRule(errors, 'unicorn/import-index')).toBeUndefined();

    // Disabled
    expect(foundSibling).toBe(false);
    expect(findRule(errors, 'no-param-reassign/sort-comp')).toBeUndefined();
    expect(findRule(errors, 'prefer-destructuring')).toBeUndefined();
    expect(findRule(errors, 'class-methods-use-this')).toBeUndefined();
    expect(findRule(errors, 'no-plusplus')).toBeUndefined();
    expect(findRule(errors, 'no-underscore-dangle')).toBeUndefined();
    expect(findRule(errors, 'promise/avoid-new')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-includes')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-dom-node-remove')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-dom-node-append')).toBeUndefined();
    expect(findRule(errors, 'unicorn/numeric-separators-style')).toBeUndefined();
    expect(findRule(errors, 'unicorn/prefer-math-trunc')).toBeUndefined();
    expect(findRule(errors, 'no-restricted-syntax')).toBeUndefined();
    expect(findRule(errors, 'global-require')).toBeUndefined();
    expect(findRule(errors, 'unicorn/no-array-reduce')).toBeUndefined();
  });

  test('react', async () => {
    expect(isArray(reactConf)).toBeTruthy();

    const errors = await runEslint(reactString(), reactConf);

    // Enabled
    expect(findRule(errors, 'react/forbid-prop-types')).toBeDefined();

    // Disabled
    expect(findRule(errors, 'react/sort-comp')).toBeUndefined();
    expect(findRule(errors, 'react/require-default-props')).toBeUndefined();
    expect(findRule(errors, 'jsx-a11y/anchor-is-valid')).toBeUndefined();
    expect(findRule(errors, 'unicorn/no-for-loop')).toBeUndefined();
    expect(findRule(errors, 'jsx-a11y/label-has-associated-control')).toBeUndefined();
  });

  test('typescript', async () => {
    const errors = await runEslint(reactTsString(), reactConf, 'example.tsx');

    // Enabled — typescript-eslint v8 replaced ban-types with no-wrapper-object-types
    expect(findRule(errors, '@typescript-eslint/no-wrapper-object-types')).toBeDefined();
    expect(findRule(errors, '@typescript-eslint/no-unused-vars')).toBeDefined();

    // Disabled
    expect(findRule(errors, 'react/prop-types')).toBeUndefined();
    expect(findRule(errors, 'react/jsx-props-no-spreading')).toBeUndefined();
  });

  test('workflow', async () => {
    const errors = await runEslint(workflowString(), workflowConf, 'example.tsx');

    // Disabled
    expect(findRule(errors, 'import/no-unresolved')).toBeUndefined();
  });
});
