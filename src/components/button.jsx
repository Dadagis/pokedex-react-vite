import React from 'react';
import PropTypes from 'prop-types';

function button({ label }) {
  return (
    <div>
      <span>{label}</span>
    </div>
  );
}

button.propTypes = { label: PropTypes.string };
button.defaultProps = { label: 'Button' };

export default button;
