const data = require("./data.json");

const findCardName = (cardName) => {
  const cardFound = data.cards.find(({ name }) => name === cardName);

  if (cardFound === undefined) {
    throw new Error(`Carta nao encontrada`);
  }
  return cardFound;
};

console.log(findCardName("Xablau"));
