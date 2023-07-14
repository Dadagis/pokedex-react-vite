import React from 'react';
import PropTypes from 'prop-types';
import '../styles/a-button/a-button.css';
import '../styles/a-text/a-text.css';

function button({ label, type, handleClick }) {
  const option = type === 'default' ? null : `--${type}`;

  return (
    <div className={['a-button', option].join(' ')} onClick={handleClick}>
      <span className="a-text --paginationButton">{label}</span>
    </div>
  );
}

button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['default', 'squared']),
  handleClick: PropTypes.func,
};
button.defaultProps = { label: 'Button', type: 'default' };

export default button;
