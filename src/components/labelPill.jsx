import React from 'react';
import PropTypes from 'prop-types';
import '../styles/a-labelPill/a-labelPill.css';

function labelPill({ type, ...props }) {
  return (
    <p key={props.key} className="a-labelPill">
      {type}
    </p>
  );
}

labelPill.propTypes = { type: PropTypes.string };

export default labelPill;
