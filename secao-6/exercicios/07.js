const getPokemons = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=10000",
  );

  const data = await response.json();
  const promises = data.results.map(({ url }) => getPokemonDetails(url));

  return Promise.all(promises);
};

const getPokemonDetails = async (url) => {
  const response = await fetch(url);
  const pokemon = await response.json();

  return {
    name: pokemon.name,
    weight: pokemon.weight,
  };
};

const top5Heaviest = async () => {
  const pokemons = await getPokemons();

  const heaviestPokemons = pokemons
    .toSorted((a, b) => b.weight - a.weight)
    .slice(0, 5);

  heaviestPokemons.forEach(({ name, weight }) => {
    console.log(`${name} - ${weight}`);
  });
};

top5Heaviest();
