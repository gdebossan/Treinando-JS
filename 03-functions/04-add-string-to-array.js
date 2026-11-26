const nomes = ["Gabriel", "Gabrielle"];

const addString = (array, novaString) => {
  if (typeof novaString === "string") {
    array.push(novaString);
    console.log(`Array atualizado: ${array}`);
    return array;
  }
  return console.log(`${novaString} nao eh uma string!`);
};

addString(nomes, "4");
