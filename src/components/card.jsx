import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/m-card/m-card.css';
import '../styles/a-text/a-text.css';
import LabelPill from './labelPill';

function card({ id, index }) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemon, setPokemon] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(id);
    if (id < 1 || id === null) return;

    axios
      .get(`${baseUrl}/${id}`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        savePokemonDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const savePokemonDetails = (data) => {
    setPokemon({
      name: data.name,
      sprite: data.sprites.front_default,
      types: [
        ...data.types.map((pokeType) => {
          return pokeType.type.name;
        }),
      ],
    });
    setLoaded(true);
  };

  const displayTypes = () => {
    return pokemon.types.map((type, index) => {
      return <LabelPill key={index} type={type} />;
    });
  };

  return loaded ? (
    <div className={['m-card', `--${pokemon.types[0]}`].join(' ')} key={index}>
      <p className="a-text --name">{pokemon.name}</p>
      <div>{displayTypes()}</div>
      <img src={pokemon.sprite} alt={pokemon.name} />
    </div>
  ) : (
    <div className="m-card --loading" key={index}>
      <div className="m-card__nameSkeleton"></div>
      <div className="m-card__typeSkeleton"></div>
      <div className="m-card__imageSkeleton"></div>
    </div>
  );
}

card.propTypes = { id: PropTypes.number };
card.defaultProps = { id: 1 };

export default card;
