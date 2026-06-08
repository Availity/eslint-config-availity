export default () => `
import * as React from 'react';

// @typescript-eslint/no-wrapper-object-types (error)
class Foo<F = String> extends Bar<String> implements Baz<String> {
  constructor(foo: String) {}

  exit(): Array<String> {
    const foo: String = 1 as String;
  }
}

// @typescript-eslint/no-unused-vars (error)
const hello: String = "World";

// @typescript-eslint/no-explicit-any (warn)
const anything: any = 'test';
console.log(anything);

// no-use-before-define (off) / @typescript-eslint/no-use-before-define (warn)
const usedLater = laterFn();
function laterFn() { return 'later'; }
console.log(usedLater);

// react/prop-types (off in .tsx)
interface HelloProps {
  world: string;
};

const SomeComp = (props: any) => <div {...props} />;

// react/jsx-props-no-spreading (off)
const Hello: React.FC<HelloProps> = ({ world, ...props }) => (
  <div>Hello {world}<SomeComp {...props} /></div>
);

export default Hello;
`;
