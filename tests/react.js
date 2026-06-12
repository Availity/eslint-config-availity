export default () => `
import React, { useState } from 'react';
import { Link } from '@reach/router';

// react/sort-comp (off) - lifecycle order doesn't matter
// react/require-default-props (off)
// react/jsx-props-no-spreading (off)
// react/react-in-jsx-scope (off) - no need to import React for JSX
// react/jsx-uses-react (off)
// camelcase (off)
const my_variable = 'hello';

// arrow-body-style (warn)
const ArrowComp = ({ name }) => {
  return <div>{name}</div>;
};

// react/function-component-definition (error - function expression not allowed)
const BadComp = function({ x }) {
  return <div>{x}</div>;
};

// react-hooks/rules-of-hooks (error - conditional hook)
function HookViolation({ condition }) {
  if (condition) {
    const [state] = useState(0);
    return <div>{state}</div>;
  }
  return null;
}

// react/function-component-definition (allowed forms)
function Patient({ a }) {
  return (
    <>
      <div>Hello {a}! {my_variable}</div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <label htmlFor="a">A</label>
      <input id="a"/>
      <ArrowComp name="test" />
      <BadComp x="bad" />
      <HookViolation condition={true} />
    </>
  )
}

// react/forbid-prop-types (error - forbids 'any')
Patient.propTypes = {
  a: PropTypes.string,
  b: PropTypes.array,
  c: PropTypes.object,
  d: PropTypes.any
};

// jsx-a11y/label-has-associated-control (error - nesting or id)
// The label above is valid (htmlFor="a" with matching id)

// jsx-a11y/anchor-is-valid (error - Link with 'to' is valid)
// The Link above is valid

// import/prefer-default-export (off)
export const helper = () => 'help';

// unicorn/prefer-query-selector (off)
document.getElementById('foo');

// unicorn/prefer-dom-node-remove (off)
const el = document.createElement('div');
el.parentNode.removeChild(el);

// unicorn/prefer-dom-node-append (off)
const anchor = document.createElement('a');
document.body.appendChild(anchor);

// react-hooks/exhaustive-deps (warn - missing dependency)
function MissingDep({ value }) {
  React.useEffect(() => {
    console.log(value);
  }, []);
  return <div>{value}</div>;
}

// unicorn/prefer-module (error - CJS in browser code)
const cjsModule = require('some-module');
console.log(cjsModule, MissingDep);

export default Patient;
`;
