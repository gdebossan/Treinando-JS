const getPokemonNameId = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );

    if (!response.ok) {
      const message =
        response.status === 404
          ? "Pokémon não encontrado"
          : `Falha na API (HTTP ${response.status})`;
      console.error(`Erro: ${message}`);
      return;
    }

    const data = await response.json();
    console.log(
      `#${data.id}  - ${data.name[0].toUpperCase() + data.name.substring(1)}`,
    );
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
  }
};

getPokemonNameId("pikachu");
