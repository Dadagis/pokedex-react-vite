import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailsContainer from './components/detailsContainer';

function Show(props) {
  const [pokemon, setPokemon] = useState({});
  const [loaded, setLoaded] = useState(false);

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const { pokemonId } = useParams();

  // TODO, refacto this part in a single service
  useEffect(() => {
    if (pokemonId < 1 || pokemonId === null) return;

    axios
      .get(`${baseUrl}/${pokemonId}`, {
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
  }, [pokemonId]);

  // TODO, refacto this part in a single service
  const savePokemonDetails = (data) => {
    setPokemon({
      name: data.name,
      sprite: data.sprites.front_default,
      types: [
        ...data.types.map((pokeType) => {
          return pokeType.type.name;
        }),
      ],
      baseExperience: data.base_experience,
      height: data.height,
      weight: data.weight,
    });
    setLoaded(true);
  };

  return (
    <>
      <Header />
      <DetailsContainer pokemon={pokemon} />
    </>
  );
}

Show.propTypes = {};

export default Show;
