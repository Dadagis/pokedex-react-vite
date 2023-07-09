import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './card.1';

function cardsList() {
  const [page, setPage] = useState(1);
  const [base, setBase] = useState(20);
  const [ids, setIds] = useState([...Array(base).keys()]);

  useEffect(() => {
    let newIds = [...Array(base * page).keys()];
    if (page > 1) {
      newIds = newIds.slice(-1 * base);
    }
    setIds(newIds);
  }, [page]);

  const updatePage = (increment = true) => {
    if (page === 1 && !increment) return;

    setPage((prevPage) => (increment ? prevPage + 1 : prevPage - 1));
  };

  const displayCards = () => {
    return ids.map((index) => <Card key={index} id={index + 1} />);
  };

  return (
    <div>
      {displayCards()}
      <button onClick={() => updatePage()}>+</button>
      <button onClick={() => updatePage(false)}>-</button>
      {page}
    </div>
  );
}

cardsList.propTypes = {};

cardsList.defaultProps = {};

export default cardsList;
