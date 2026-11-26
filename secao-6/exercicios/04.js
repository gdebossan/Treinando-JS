const getTypes = async (pokemon) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
  );

  if (!response.ok) {
    throw new Error(`Falha ao buscar Pokémon (HTTP ${response.status})`);
  }

  const data = await response.json();
  const types = data.types.map(({ type }) => type.name);
  console.log(
    `#${data.id} - ${data.name[0].toUpperCase() + data.name.substring(1)} \nTipos: ${types}`,
  );
};

getTypes(1).catch((error) => {
  console.error("Erro ao consultar tipos:", error);
  process.exitCode = 1;
});
