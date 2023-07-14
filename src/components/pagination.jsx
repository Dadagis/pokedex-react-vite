import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import '../styles/m-pagination/m-pagination.css';

function pagination({ page, handleClick }) {
  return (
    <div className="m-pagination">
      <Button label="-" type="squared" handleClick={() => handleClick(false)} />
      <span className="a-text">{page}</span>
      <Button label="+" type="squared" handleClick={handleClick} />
    </div>
  );
}

pagination.propTypes = { page: PropTypes.string };

export default pagination;
