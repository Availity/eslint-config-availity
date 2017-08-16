const test = require('tape');
const isPlainObj = require('is-plain-obj');
const tempWrite = require('temp-write');
const eslint = require('eslint');
const conf = require('./');

function runEslint(str, conf) {

  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;

}

test('config', (t) => {
  t.plan(2);
  t.ok(isPlainObj(conf));
  t.ok(isPlainObj(conf.rules));
});

test('semi, no-var', (t) => {
  t.plan(2);

  const errors = runEslint(`
'use strict'
var foo = function () {};
foo();
`, conf);

  t.equal(errors[0].ruleId, 'semi');
  t.equal(errors[1].ruleId, 'no-var');
});

test('no-used (static)', (t) => {
  t.plan(1);

  const errors = runEslint(`
'use strict';
class Service {
  static $inject = ['$scope'];
}
Service.$inject.length;
` , conf);

  t.equal(errors.length, 0);
})

