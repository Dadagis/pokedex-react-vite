import React from 'react';
import PropTypes from 'prop-types';
import '../styles/a-button/a-button.css';

function button({ label, type }) {
  const option = type === 'default' ? null : `--${type}`;

  return (
    <div className={['a-button', option].join(' ')}>
      <span className="a-text --paginationButton">{label}</span>
    </div>
  );
}

button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf[('default', 'squared')],
};
button.defaultProps = { label: 'Button', type: 'default' };

export default button;
