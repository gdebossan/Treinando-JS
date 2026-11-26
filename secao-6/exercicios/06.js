const filterByType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);

  if (!response.ok) {
    return "Tipo nao encontrado!";
  }

  const data = await response.json();

  const pokemon = data.pokemon.map(({ pokemon }) => pokemon.name);

  return pokemon.join(", ");
};

console.log(await filterByType("poison"));
// console.log(await filterByType(10));
