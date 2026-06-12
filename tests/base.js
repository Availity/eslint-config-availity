export default () => `
// no-var (error)
var foo = function foo() {};
foo()

// no-unused-vars with ignoreRestSiblings (error)
const { ignoredAttribute, ...other } = {};
console.log(other);

// no-shadow (off)
var a = 3;
function b() {
    var a = 10;
    console.log(a);
}
b();

// no-param-reassign (off)
function reassign(bar) {
    bar = 13;
    return bar;
}
reassign(1);

// prefer-destructuring: array=false (off for arrays)
var arr = [1, 2, 3];
var first = arr[0];
console.log(first);

// prefer-destructuring: object=true (error for objects)
// Note: not triggered here because we use destructuring correctly

// class-methods-use-this (off)
class A {
    foo() {
        console.log("Hello World");
    }
}
new A();

// no-plusplus: allowForLoopAfterthoughts (off in for loops)
const l = 10;
for (let i = 0; i < l; i++) {
    console.log(i);
}

// no-underscore-dangle (off)
const obj = {};
obj._bar = 1;

// promise/avoid-new (off)
const fn = () => new Promise((resolve) => resolve(true));
fn();

// no-restricted-syntax (off)
var doSomething = function () {};
doSomething();

// global-require (off)
function readFile(filename, callback) {
    var fs = require('fs');
    fs.readFile(filename, callback)
}
readFile('a', () => {});

// strict (off)
// Would normally error in scripts without 'use strict'

// default-param-last (warn) - this triggers
function defaultParam(a = 1, b) {
    return a + b;
}
defaultParam(1, 2);

// unicorn/filename-case (off) - cannot test via code content
// unicorn/no-empty-file (warn) - cannot test with non-empty content

// unicorn/empty-brace-spaces (off)
const emptyObj = { };
console.log(emptyObj);

// unicorn/prefer-node-protocol (off)
const path = require('path');
console.log(path);

// unicorn/numeric-separators-style: onlyIfContainsSeparator (off for plain numbers)
const number = 100000;
console.log(number);

// unicorn/no-nested-ternary (off)
const nested = true ? (false ? 'a' : 'b') : 'c';
console.log(nested);

// unicorn/prefer-math-trunc (off)
var targetLength = 1;
targetLength >>= 0;

// unicorn/no-null (off)
const nullable = null;
console.log(nullable);

// unicorn/number-literal-case (off)
const hex = 0xFF;
console.log(hex);

// unicorn/prefer-includes (off)
[].indexOf('foo') !== -1;

// unicorn/prevent-abbreviations (off)
const btn = document.querySelector('button');
console.log(btn);

// unicorn/prefer-module (off)
const conf = require('./');
console.log(conf);

// unicorn/no-array-reduce (off)
var array = [1, 2, 3];
var result = array.reduce((acc, current) => acc + current);
console.log(result);

// unicorn/no-anonymous-default-export (off)
// Tested implicitly by module structure

// unicorn/no-negated-condition (off)
const val = true;
if (!val) {
    console.log('no');
} else {
    console.log('yes');
}

// unicorn/no-array-for-each (warn)
[1, 2].forEach(x => console.log(x));

// unicorn/no-useless-undefined (off)
function returnUndef() {
    return undefined;
}
returnUndef();

// unicorn/consistent-function-scoping (warn)
function outer() {
    function inner() {
        return 'hello';
    }
    return inner();
}
outer();

// unicorn/switch-case-braces (off)
const sw = 1;
switch (sw) {
    case 1:
        console.log('one');
        break;
    default:
        console.log('other');
}

// unicorn/prefer-global-this (off)
console.log(global);

// unicorn/prefer-string-replace-all (warn)
'foo-bar'.replace(/-/g, '_');

// unicorn/prefer-at (warn)
const lastItem = array[array.length - 1];
console.log(lastItem);

// unicorn/prefer-ternary (off)
let ternaryResult;
if (val) {
    ternaryResult = 'a';
} else {
    ternaryResult = 'b';
}
console.log(ternaryResult);

// unicorn/prefer-spread (warn)
const sliced = array.slice();
console.log(sliced);

// import/no-extraneous-dependencies (off)
// Tested by requiring packages not in deps

// no-plusplus outside for loop (error)
// let counter = 0;
// counter++;
`;
