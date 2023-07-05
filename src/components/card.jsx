import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function card({ id }) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemon, setPokemon] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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

  return (
    loaded && (
      <div>
        <p>{pokemon.name}</p>
        {pokemon.types.map((type) => {
          return <p>{type}</p>;
        })}
        <img src={pokemon.sprite} alt={pokemon.name} />
      </div>
    )
  );
}

card.propTypes = { id: PropTypes.number };
card.defaultProps = { id: 1 };

export default card;
