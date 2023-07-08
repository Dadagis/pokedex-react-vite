import React from 'react';
import PropTypes from 'prop-types';
import '../styles/a-labelPill/a-labelPill.css';

function labelPill({ type, color, ...props }) {
  return (
    <p
      key={props.key}
      className="a-labelPill"
      style={{ backgroundColor: color }}
    >
      {type}
    </p>
  );
}

labelPill.propTypes = { type: PropTypes.string };

export default labelPill;
