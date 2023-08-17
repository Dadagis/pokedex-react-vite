import detailsContainer from '../components/detailsContainer';

export default {
  tags: ['autodocs'],
  component: detailsContainer,
};

export const Default = {
  args: {
    pokemon: {
      baseExperience: 64,
      height: 0.7,
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['grass', 'poison'],
      weight: 6.9,
    },
  },
};
