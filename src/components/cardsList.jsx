import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import '../styles/o-cardsList/o-cardsList.css';
function cardsList({ page }) {
  const [base, setBase] = useState(21);
  const [ids, setIds] = useState([...Array(base).keys()]);

  useEffect(() => {
    let newIds = [...Array(base * page).keys()];
    if (page > 1) {
      newIds = newIds.slice(-1 * base);
    }
    setIds(newIds);
  }, [page]);

  const displayCards = () => {
    return ids.map((index) => <Card key={index} id={index + 1} />);
  };

  return <div className="o-cardsList">{displayCards()}</div>;
}

cardsList.propTypes = { page: PropTypes.string };

cardsList.defaultProps = { page: '1' };

export default cardsList;
