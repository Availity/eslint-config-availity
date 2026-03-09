export default () => `
import * as React from 'react';

class Foo<F = String> extends Bar<String> implements Baz<String> {
  constructor(foo: String) {}

  exit(): Array<String> {
    const foo: String = 1 as String;
  }
}

// testing no-unused-vars
const hello: String  = "World";

interface HelloProps {
  world: string;
};

const SomeComp = props => <div {...props} />

const Hello: React.SFC<HelloProps> = ({ world, ...props }) => (
  <div>Hello {world}<SomeComp {...props} /></div>
);
`;
