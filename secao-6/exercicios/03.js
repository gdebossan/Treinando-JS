const getPokemonInfo = async (pokemon) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
  );

  if (!response.ok) {
    throw new Error(`Falha ao buscar Pokémon (HTTP ${response.status})`);
  }

  const data = await response.json();
  console.log(
    `#${data.id} - ${data.name[0].toUpperCase() + data.name.substring(1)} \nAltura: ${data.height} \nPeso: ${data.weight}`,
  );
};

getPokemonInfo("pikachu").catch((error) => {
  console.error("Erro ao consultar Pokémon:", error);
  process.exitCode = 1;
});
