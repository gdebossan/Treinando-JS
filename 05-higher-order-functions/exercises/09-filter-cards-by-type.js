const data = require("../data.json");

const getCardsByTypeId = (cards, targetTypeId) =>
  cards
    .filter(({ typeId }) => typeId === targetTypeId)
    .map(({ name, typeId }) => ({ name, typeId }));

console.log(getCardsByTypeId(data.cards, 1));
