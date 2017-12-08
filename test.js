const test = require('tape');
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

test('base rules', t => {
  t.plan(4);

  t.ok(isPlainObj(conf), 'should exist');
  t.ok(isPlainObj(conf.rules), 'should have rules configuration');

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

  t.equal(errors[0].ruleId, 'no-var', 'should error when using var');
  t.equal(errors[1].ruleId, 'no-unused-vars', 'should error variables not used');
});

test('react rules', t => {
  t.plan(3);

  t.ok(isPlainObj(reactConf), 'should exist');
  t.ok(isPlainObj(reactConf.rules), 'should have rules configuration');

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
  t.equal(result, undefined);
});
