const isPlainObj = require('is-plain-obj');
const eslint = require('eslint');
const find = require('lodash.find');
const baseConf = require('..');
const reactConf = require('../browser');
const workflowConf = require('../workflow');
const reactString = require('./react');
const reactTsString = require('./react-typescript');
const baseString = require('./base');
const workflowString = require('./workflow');

function runEslint(string, configuration, fileName) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    baseConfig: configuration,
  });

  return linter.executeOnText(string, fileName).results[0].messages;
}

describe('rules', () => {
  test('base', () => {
    expect(isPlainObj(baseConf)).toBeTruthy();
    expect(isPlainObj(baseConf.rules)).toBeDefined();

    const errors = runEslint(baseString(), baseConf);

    const foundSibling = errors.some(
      (element) => element.ruleId === 'no-unused-vars' && element.message.includes('ignoredAttribute')
    );

    // Enabled
    expect(find(errors, { ruleId: 'no-var' })).toBeDefined();
    expect(find(errors, { ruleId: 'no-unused-vars' })).toBeDefined();
    expect(find(errors, { ruleId: 'unicorn/import-index' })).toBeUndefined();

    // Disabled
    expect(foundSibling).toBe(false);
    expect(find(errors, { ruleId: 'no-param-reassign/sort-comp' })).toBeUndefined();
    expect(find(errors, { ruleId: 'prefer-destructuring' })).toBeUndefined();
    expect(find(errors, { ruleId: 'class-methods-use-this' })).toBeUndefined();
    expect(find(errors, { ruleId: 'no-plusplus' })).toBeUndefined();
    expect(find(errors, { ruleId: 'no-underscore-dangle' })).toBeUndefined();
    expect(find(errors, { ruleId: 'promise/avoid-new' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/prefer-includes' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/prefer-dom-node-remove' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/prefer-dom-node-append' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/numeric-separators-style' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/prefer-math-trunc' })).toBeUndefined();
    expect(find(errors, { ruleId: 'no-restricted-syntax' })).toBeUndefined();
    expect(find(errors, { ruleId: 'global-require' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/no-array-reduce' })).toBeUndefined();
  });

  test('react', () => {
    expect(isPlainObj(reactConf)).toBeDefined();
    expect(isPlainObj(reactConf.rules)).toBeDefined();

    const errors = runEslint(reactString(), reactConf);

    // Enabled
    expect(find(errors, { ruleId: 'react/forbid-prop-types' })).toBeDefined();

    // Disabled
    expect(find(errors, { ruleId: 'react/sort-comp' })).toBeUndefined();
    expect(find(errors, { ruleId: 'react/require-default-props' })).toBeUndefined();
    expect(find(errors, { ruleId: 'jsx-a11y/anchor-is-valid' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/no-for-loop' })).toBeUndefined();
    expect(find(errors, { ruleId: 'jsx-a11y/label-has-associated-control' })).toBeUndefined();
  });

  test('typescript', () => {
    const errors = runEslint(reactTsString(), reactConf, 'example.tsx');
    expect(find(errors, { ruleId: '@typescript-eslint/ban-types' })).toBeDefined();
    expect(find(errors, { ruleId: '@typescript-eslint/no-unused-vars' })).toBeDefined();
    expect(find(errors, { ruleId: 'react/prop-types' })).toBeUndefined();
    expect(find(errors, { ruleId: 'react/jsx-props-no-spreading' })).toBeUndefined();
  });

  test('workflow', () => {
    const errors = runEslint(workflowString(), workflowConf, 'example.tsx');
    expect(find(errors, { ruleId: 'import/no-unresolved' })).toBeUndefined();
  });
});
