import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LabelPill from './labelPill';
import '../styles/o-detailsContainer/o-detailsContainer.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function detailsContainer() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species';
  const [pokemon, setPokemon] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { id = 1 } = useParams();

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

  useEffect(() => {
    if (pokemon.name === null || pokemon.name === undefined) return;

    axios
      .get(`${speciesUrl}/${id}`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        addPokemonDetails(response.data);
        console.log(pokemon);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemon.name]);

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
      height: data.height / 10,
      weight: data.weight / 10,
    });
  };

  const addPokemonDetails = (data) => {
    setPokemon((prevState) => ({
      ...prevState,
      evolution_chain_url: data.evolution_chain.url,
      description: data.flavor_text_entries[0].flavor_text,
    }));
    setLoaded(true);
  };

  const displayTypes = () => {
    return pokemon.types.map((type, index) => {
      return <LabelPill key={index} type={type} has_color={true} />;
    });
  };

  return (
    loaded && (
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
          <p className="a-text">Height : {pokemon.height} m</p>
          <p className="a-text">Weight : {pokemon.weight} kg</p>
          <p className="a-text">Description : {pokemon.description}</p>
        </div>
      </div>
    )
  );
}

detailsContainer.propTypes = {};

export default detailsContainer;
