const filterByType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);

  if (response.status === 404) {
    return "Tipo não encontrado!";
  }

  if (!response.ok) {
    throw new Error(`Falha ao buscar tipo (HTTP ${response.status})`);
  }

  const data = await response.json();

  const pokemon = data.pokemon.map(({ pokemon }) => pokemon.name);

  return pokemon.join(", ");
};

filterByType("poison")
  .then((pokemon) => console.log(pokemon))
  .catch((error) => {
    console.error("Erro ao consultar tipo:", error);
    process.exitCode = 1;
  });
