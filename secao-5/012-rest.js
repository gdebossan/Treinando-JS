const data = require("./data.json");

const getCardsByType = (...cardType) => {
  // rest parameter
  return data.cards
    .filter(({ typeId }) => cardType.find((type) => type === typeId))
    .map(({ typeId, name }) => ({ typeId, name }))
    .sort((a, b) => a.typeId - b.typeId);
};

console.log(getCardsByType(1, 2, 3));
