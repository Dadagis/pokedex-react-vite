import React from 'react';
import PropTypes from 'prop-types';
import LabelPill from './labelPill';
import '../styles/o-detailsContainer/o-detailsContainer.css';

function detailsContainer({ pokemon }) {
  const displayTypes = () => {
    return pokemon.types.map((type, index) => {
      return <LabelPill key={index} type={type} has_color={true} />;
    });
  };

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
      <div className="o-detailsContainer__types">{displayTypes()}</div>
      <div className="o-detailsContainer__stats">
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
      </div>
    </div>
  );
}

detailsContainer.propTypes = {};

export default detailsContainer;
