import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import '../styles/o-cardsList/o-cardsList.css';
import Button from './button';
function cardsList({ page, updatePage }) {
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

  return (
    <div className="o-cardsList">
      {displayCards()}
      <Button label="+" type="squared" handleClick={updatePage} />
      <Button label="-" type="squared" handleClick={() => updatePage(false)} />
      {page}
    </div>
  );
}

cardsList.propTypes = {};

cardsList.defaultProps = {};

export default cardsList;
