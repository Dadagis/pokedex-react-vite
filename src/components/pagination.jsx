import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

function pagination({ page, handleClick }) {
  return (
    <>
      <Button label="+" type="squared" handleClick={handleClick} />
      <Button label="-" type="squared" handleClick={() => handleClick(false)} />
      {page}
    </>
  );
}

pagination.propTypes = {};

export default pagination;
