const isPlainObj = require('is-plain-obj');
const tempWrite = require('temp-write');
const eslint = require('eslint');
const find = require('lodash.find');
const baseConf = require('..');
const reactConf = require('../browser');
const reactString = require('./react');
const baseString = require('./base');

function runEslint(string, configuration) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(configuration)),
  });

  return linter.executeOnText(string).results[0].messages;
}

describe('rules', () => {
  test('base', () => {
    expect(isPlainObj(baseConf)).toBeTruthy();
    expect(isPlainObj(baseConf.rules)).toBeDefined();

    const errors = runEslint(baseString(), baseConf);

    // Enabled
    expect(find(errors, { ruleId: 'no-var' })).toBeDefined();
    expect(find(errors, { ruleId: 'no-unused-vars' })).toBeDefined();
    expect(find(errors, { ruleId: 'unicorn/import-index' })).toBeUndefined();

    // Disabled
    expect(find(errors, { ruleId: 'no-param-reassign/sort-comp' })).toBeUndefined();
    expect(find(errors, { ruleId: 'prefer-destructuring' })).toBeUndefined();
    expect(find(errors, { ruleId: 'class-methods-use-this' })).toBeUndefined();
    expect(find(errors, { ruleId: 'no-plusplus' })).toBeUndefined();
    expect(find(errors, { ruleId: 'no-underscore-dangle' })).toBeUndefined();
    expect(find(errors, { ruleId: 'promise/avoid-new' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/prefer-includes' })).toBeUndefined();
    expect(find(errors, { ruleId: 'unicorn/prefer-node-remove' })).toBeUndefined();
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
  });
});
