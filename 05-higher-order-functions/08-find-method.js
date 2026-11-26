const data = require("./data.json");

const findCardName = (cardName) => {
  const cardFound = data.cards.find(({ name }) => name === cardName);

  return cardFound;
};

console.log(findCardName("Dark Magician"));
