module.exports = () => `
import React, { Component } from 'react';
import { Link } from '@reach/router';

class Patient extends Component {
  render({ a }) {
    return (
      <>
        <div>Hello {a}!</div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }
  displayName : 'Hello'
}

const loopy = () => {
  const arr = [];
  for (let index = 0; index < arr.length; index++) {
	  const element = arr[index];
  }
}

// react/require-default-props
Patient.propTypes = {
  a: PropTypes.string,
  b: PropTypes.array,
  c: PropTypes.object,
  d: PropTypes.any
};

export default Patient;

`;
