import React from 'react';
import PropTypes from 'prop-types';
import '../styles/o-detailsContainer/o-detailsContainer.css';

function detailsContainer({ pokemon }) {
  return (
    <div className="o-detailsContainer">
      <div
        className={['o-detailsContainer__header', `--${pokemon.types[0]}`]
          .join(' ')
          .trim()}
      >
        <p className="a-text --name">{pokemon.name}</p>
        <img src={pokemon.sprite} alt={`Sprite of ${pokemon.name}`} />
      </div>
      <p>{pokemon.types}</p>
      <div className="o-detailsContainer__stats">
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
      </div>
    </div>
  );
}

detailsContainer.propTypes = {};

export default detailsContainer;
