import React from 'react';
import PropTypes from 'prop-types';
import '../styles/a-labelPill/a-labelPill.css';

function labelPill({ type, has_color, ...props }) {
  const colored = has_color ? '--colored' : null;
  return (
    <p
      key={props.key}
      className={['a-labelPill', `--${type}`, colored].join(' ').trim()}
    >
      {type}
    </p>
  );
}

labelPill.propTypes = { type: PropTypes.string, has_color: PropTypes.bool };
labelPill.defaultProps = { type: 'fire', has_color: false };

export default labelPill;
