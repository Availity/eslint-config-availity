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


describe('rules', () => {
  test('base', () => {
    expect(isPlainObj(conf)).toBeTruthy();
    expect(isPlainObj(conf.rules)).toBeDefined();

    const errors = runEslint(
      `
// no-var
var foo = function foo() {};

foo()


// no-unused-vars
const arr = [
  1,
  2
];

// unicorn/import-index
const conf = require('./');

// no-param-reassign
function foo(bar) {
    bar = 13;
}

// no-shadow
var a = 3;
function b() {
    var a = 10;
}

// class-methods-use-this
class A {
    foo() {
        console.log("Hello World");
    }
}

// no-plusplus
const l = 10;
for (i = 0; i < l; i++) {
    return;
}

// no-underscore-dangle
foo._bar();

// promise/avoid-new
const fn = () =>  {
  return new Promise((resolve, reject) => {
    return resolve(true);
  });
}
`,
      conf
    );

    // Enabled
    expect(find(errors, { ruleId: 'no-var' })).toBeDefined();
    expect(find(errors, { ruleId: 'no-unused-vars' })).toBeDefined();
    expect(find(errors, { ruleId: 'unicorn/import-index'})).toBeUndefined();

    // Disabled
    expect(find(errors, { ruleId: 'no-param-reassign/sort-comp' })).toBeUndefined();
    expect(find(errors, { ruleId: 'class-methods-use-this' })).toBeUndefined();
    expect(find(errors, { ruleId: 'no-plusplus' })).toBeUndefined();
    expect(find(errors, { ruleId: 'no-underscore-dangle' })).toBeUndefined();
    expect(find(errors, { ruleId: 'promise/avoid-new' })).toBeUndefined();
  });

  test('react', () => {
    expect(isPlainObj(reactConf)).toBeDefined();
    expect(isPlainObj(reactConf.rules)).toBeDefined();

    const errors = runEslint(
      `
import React, { Component } from 'react';
import { Link } from '@reach/router';

class Patient extends Component {
  render({ a }) {
    return (
      <>
        <div>Hello {a}!</div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }
  displayName : 'Hello'
}

// react/require-default-props
Patient.propTypes = {
  a: PropTypes.string,
  b: PropTypes.array,
  c: PropTypes.object,
  d: PropTypes.any
};

export default Patient;

`,
      reactConf
    );

    // Enabled
    expect(find(errors, { ruleId: 'react/forbid-prop-types' })).toBeDefined();

    // Disabled
    expect(find(errors, { ruleId: 'react/sort-comp' })).toBeUndefined();
    expect(find(errors, { ruleId: 'react/require-default-props' })).toBeUndefined();
    expect(find(errors, { ruleId: 'jsx-a11y/anchor-is-valid' })).toBeUndefined();
  });
});
