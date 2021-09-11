module.exports = () => `
// no-var
var foo = function foo() {};
foo()

const number = 100000; // Pass, this number does not contains separators

// no-unused-vars ignore siblings
const { ignoredAttribute , ...other } = {};

console.log(other);

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

// unicorn/prefer-dom-node-remove
this.parentNode.removeChild(this)

// unicorn/prefer-dom-node-append
const anchor = document.createElement('a');
document.body.appendChild(anchor);

// no-restricted-syntax
var doSomething = function () {};

// global-require
function readFile(filename, callback) {
    var fs = require('fs');
    fs.readFile(filename, callback)
}

// unicorn/prefer-math-trunc
var targetLength = 1;
targetLength >>= 0;

// unicorn/no-array-reduce
var array = [1, 2, 3]
var result = array.reduce((acc, current) => acc + current)
`;
