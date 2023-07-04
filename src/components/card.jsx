import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function card({ id }) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
        savePokemonDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const savePokemonDetails = (data) => {
    setPokemon({
      name: data.name,
      sprite: data.sprites.front_default,
      order: data.order,
    });
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.order}</p>
      <img src={pokemon.sprite} alt={pokemon.name} />
    </div>
  );
}

card.propTypes = {};

export default card;
