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

// react/require-default-props
Patient.propTypes = {
  a: PropTypes.string,
  b: PropTypes.array,
  c: PropTypes.object,
  d: PropTypes.any
};

export default Patient;

`;
