const data = require("./data.json");

const getCardByType = (typeName) => {
  const getType = data.types.find(({ name }) => name === typeName);

  if (getType === undefined) throw new Error("Tipo de carta nao encontrado!");

  const getCard = data.cards.find(({ typeId }) => typeId === getType.id);

  return {
    typeId: getType.id,
    name: getCard.name,
  };
};

console.log(getCardByType("Fiend"));
