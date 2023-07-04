import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from './card';

function cardsList({ limit, offset }) {
  const keys = [...Array(10).keys()];

  return keys.map((index) => <Card id={index + 1} />);
}

cardsList.propTypes = {
  limit: PropTypes.number,
  offset: PropTypes.number,
};

cardsList.defaultProps = {
  limit: 20,
  offset: 0,
};

export default cardsList;
