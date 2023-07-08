const getTypeColor = (type) => {
  const typeColors = {
    grass: '#72cdb2',
    fire: '#eb7472',
    water: '#83b9f3',
    electric: '#edce79',
  };

  if (typeColors[type] != undefined) return typeColors[type];

  return '#f0f0f0';
};

export default getTypeColor;
