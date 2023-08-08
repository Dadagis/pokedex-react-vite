import React from 'react';
import PropTypes from 'prop-types';

function detailsContainer({ pokemon }) {
  return (
    <div>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprite} alt={`Sprite of ${pokemon.name}`} />
    </div>
  );
}

detailsContainer.propTypes = {};

export default detailsContainer;
