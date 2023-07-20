import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import '../styles/o-cardsList/o-cardsList.css';
function cardsList({ page, largeDisplay }) {
  const [base, setBase] = useState(21);
  const [ids, setIds] = useState([...Array(base).keys()]);

  const mode = largeDisplay ? '--large' : null;

  useEffect(() => {
    let newIds = [...Array(base * page).keys()];
    if (page > 1) {
      newIds = newIds.slice(-1 * base);
    }
    setIds(newIds);
  }, [page]);

  const displayCards = () => {
    return ids.map((index) => (
      <Card key={index} id={index + 1} large={largeDisplay} />
    ));
  };

  return (
    <div className={['o-cardsList', mode].join(' ').trim()}>
      {displayCards()}
    </div>
  );
}

cardsList.propTypes = { page: PropTypes.string, largeDisplay: PropTypes.bool };

cardsList.defaultProps = { page: '1', largeDisplay: false };

export default cardsList;
