const getPokemonNameId = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );
    const data = await response.json();

    // console.log(data.status);

    data.status === 404
      ? console.log(`Erro: Pokémon não encontrado`)
      : console.log(
          `#${data.id}  - ${data.name[0].toUpperCase() + data.name.substring(1)}`,
        );
  } catch (error) {
    console.log(error);
  }
};

getPokemonNameId("pikachu");
