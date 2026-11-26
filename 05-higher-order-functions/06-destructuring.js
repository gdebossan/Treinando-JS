const data = require("./data.json");

const getCardsByType = (cardType) =>
  data.cards
    .filter(({ typeId }) => cardType === typeId)
    .map(({ typeId, name }) => ({ typeId, name }));

console.log(getCardsByType(1));
