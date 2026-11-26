const getPokemons = async (ids) => {
  const promises = ids.map(async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await response.json();

    return data.name[0].toUpperCase() + data.name.substring(1);
  });

  const pokemons = await Promise.all(promises);

  return pokemons.join(", ");
};

console.log(await getPokemons([25, 4, 35]));
