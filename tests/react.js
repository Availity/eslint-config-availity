export default () => `
import React from 'react';
import { Link } from '@reach/router';

export default function Patient({ a }) {
  return (
    <>
        <div>Hello {a}!</div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <label htmlFor="a">A</label>
        <input id="a"/>
      </>
  )
}

Patient.propTypes = {
  a: PropTypes.string,
  b: PropTypes.array,
  c: PropTypes.object,
  d: PropTypes.any
};

export default Patient;

`;
