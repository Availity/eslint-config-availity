const isPlainObj = require('is-plain-obj');
const tempWrite = require('temp-write');
const eslint = require('eslint');
const find = require('lodash.find');
const baseConf = require('./');
const reactConf = require('./browser');

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

// array destructuring
var foo = array[0];

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

// unicorn/prefer-includes
[].indexOf('foo') !== -1;

// unicorn/prefer-node-remove
this.parentNode.removeChild(this)
`,
      baseConf
    );

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
