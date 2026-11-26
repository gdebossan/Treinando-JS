const getTypes = async (pokemon) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
    (response) => response.json(),
  );
  const tipos = data.types.map(({ type }) => type.name);
  console.log(
    `#${data.id} - ${data.name[0].toUpperCase() + data.name.substring(1)} \nTipos: ${tipos}`,
  );
};

getTypes(1);
