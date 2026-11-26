const getPokemons = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`);

  if (!response.ok) {
    throw new Error(`Falha ao listar Pokémon (HTTP ${response.status})`);
  }

  const data = await response.json();
  const promises = data.results.map(async ({ url }) => getPokemonDetails(url));

  return Promise.all(promises);
};

const getPokemonDetails = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Falha ao buscar detalhes do Pokémon (HTTP ${response.status})`,
    );
  }

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

groupPokemonsByType().catch((error) => {
  console.error("Erro ao agrupar Pokémon:", error);
  process.exitCode = 1;
});
