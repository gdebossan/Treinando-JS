const getPokemons = async (ids) => {
  const promises = ids.map(async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error(
        `Falha ao buscar Pokémon ${id} (HTTP ${response.status})`,
      );
    }

    const data = await response.json();

    return data.name[0].toUpperCase() + data.name.substring(1);
  });

  const pokemons = await Promise.all(promises);

  return pokemons.join(", ");
};

getPokemons([25, 4, 35])
  .then((pokemons) => console.log(pokemons))
  .catch((error) => {
    console.error("Erro ao consultar Pokémon:", error);
    process.exitCode = 1;
  });
