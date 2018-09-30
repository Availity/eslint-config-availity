const isPlainObj = require('is-plain-obj');
const tempWrite = require('temp-write');
const eslint = require('eslint');
const find = require('lodash.find');
const conf = require('./');
const reactConf = require('./browser');

function runEslint(str, configuration) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(configuration)),
  });

  return linter.executeOnText(str).results[0].messages;
}

test('base rules', () => {
  expect(isPlainObj(conf)).toBeTruthy();
  expect(isPlainObj(conf.rules)).toBeDefined();

  const errors = runEslint(
    `var foo = function foo() {};
foo()
const arr = [
  1,
  2
];
`,
    conf
  );

  expect(errors[0].ruleId).toBe('no-var');
  expect(errors[1].ruleId).toBe('no-unused-vars');
});

test('react rules', () => {
  expect(isPlainObj(reactConf)).toBeDefined();
  expect(isPlainObj(reactConf.rules)).toBeDefined();

  const errors = runEslint(
    `import React, { Component } from 'react';

export default class Patient extends Component {
  render() {
    return (
      <div>Hello</div>
    );
  }

  displayName : 'Hello'
}
`,
    reactConf
  );

  const result = find(errors, { ruleId: 'react/sort-comp' });
  expect(result).toBeUndefined();
});
