module.exports = () => `
import * as React from 'react';

class Foo<F = String> extends Bar<String> implements Baz<String> {
  constructor(foo: String) {}

  exit(): Array<String> {
    const foo: String = 1 as String;
  }
}

// testing no-unused-vars
const hello: String  = "World";
`;
