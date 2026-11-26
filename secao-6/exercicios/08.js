const getPokemons = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`);

  const data = await response.json();
  const promises = data.results.map(async ({ url }) => getPokemonDetails(url));

  return Promise.all(promises);
};

const getPokemonDetails = async (url) => {
  const response = await fetch(url);
  const pokemon = await response.json();

  const pokemonTypes = pokemon.types.map(({ type }) => type.name);

  return {
    name: pokemon.name,
    types: pokemonTypes,
  };
};

const groupPokemonsByType = async () => {
  const pokemons = await getPokemons();

  const groupedPokemons = pokemons.reduce((acc, pokemon) => {
    pokemon.types.forEach((type) => {
      if (!acc[type]) {
        acc[type] = [];
      }

      acc[type].push(pokemon.name);
    });

    return acc;
  }, {});

  console.log(groupedPokemons);
};

groupPokemonsByType();
