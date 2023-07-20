import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/m-card/m-card.css';
import '../styles/a-text/a-text.css';
import LabelPill from './labelPill';

function card({ id, index, large }) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemon, setPokemon] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
      baseExperience: data.base_experience,
      height: data.height,
      weight: data.weight,
    });
    setLoaded(true);
  };

  const displayTypes = () => {
    return pokemon.types.map((type, index) => {
      return <LabelPill key={index} type={type} />;
    });
  };

  if (loaded && large) {
    return (
      <div
        className={['m-card', `--${pokemon.types[0]}`, '--large']
          .join(' ')
          .trim()}
        key={index}
      >
        <div>
          <p className="a-text --name">{pokemon.name}</p>
          <div>{displayTypes()}</div>
          <img src={pokemon.sprite} alt={pokemon.name} />
        </div>
        <div className="m-card__stats">
          <p className="a-text --stat">{`Height : ${pokemon.height}`}</p>
          <p className="a-text --stat">{`Weight : ${pokemon.weight}`}</p>
          <p className="a-text --stat">{`Base Experience : ${pokemon.baseExperience}`}</p>
        </div>
      </div>
    );
  } else if (loaded) {
    return (
      <div
        className={['m-card', `--${pokemon.types[0]}`].join(' ').trim()}
        key={index}
      >
        <p className="a-text --name">{pokemon.name}</p>
        <div>{displayTypes()}</div>
        <img src={pokemon.sprite} alt={pokemon.name} />
      </div>
    );
  } else {
    <div className="m-card --loading" key={index}>
      <div className="m-card__nameSkeleton"></div>
      <div className="m-card__typeSkeleton"></div>
      <div className="m-card__imageSkeleton"></div>
    </div>;
  }
  // return loaded ? (
  //   <div
  //     className={['m-card', `--${pokemon.types[0]}`, size].join(' ').trim()}
  //     key={index}
  //   >
  //     <p className="a-text --name">{pokemon.name}</p>
  //     <div>{displayTypes()}</div>
  //     <img src={pokemon.sprite} alt={pokemon.name} />
  //     <div>
  //       <p>salut</p>
  //     </div>
  //   </div>
  // ) : (
  //   <div className="m-card --loading" key={index}>
  //     <div className="m-card__nameSkeleton"></div>
  //     <div className="m-card__typeSkeleton"></div>
  //     <div className="m-card__imageSkeleton"></div>
  //   </div>
  // );
}

card.propTypes = { id: PropTypes.number, large: PropTypes.bool };
card.defaultProps = { id: 1, large: false };

export default card;
