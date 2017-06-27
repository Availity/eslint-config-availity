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

test('', (t) => {

  t.plan(5);

  t.ok(isPlainObj(conf), 'should exist');
  t.ok(isPlainObj(conf.rules, ), 'should have rules configuration');

  const errors = runEslint(`var foo = function () {};
foo()
const arr = [
  1,
  2
];
var a = 3;
function b() {
  var a = 10;
}
`, conf);
  t.equal(errors[0].ruleId, 'no-var', 'should error when using var');
  t.equal(errors[1].ruleId, 'semi', 'should error when missing semi-colons');
  t.equal(errors[3].ruleId, 'comma-dangle', 'should error when not using commas in multie-line arays');
});
