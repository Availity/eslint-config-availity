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

test('rules', (t) => {

  t.plan(4);

  t.ok(isPlainObj(conf));
  t.ok(isPlainObj(conf.rules));

  const errors = runEslint(`var foo = function () {};\nfoo()\n`, conf);
  t.equal(errors[0].ruleId, 'no-var');
  t.equal(errors[1].ruleId, 'semi');
});
