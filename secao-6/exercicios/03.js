const getPokemonInfo = async (pokemon) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
    (response) => response.json(),
  );
  console.log(
    `#${data.id} - ${data.name[0].toUpperCase() + data.name.substring(1)} \nAltura: ${data.height} \nPeso: ${data.weight}`,
  );
  // console.log(data);
};

getPokemonInfo("pikachu");
