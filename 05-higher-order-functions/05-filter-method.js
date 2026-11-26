const data = require("./data.json");

// const firsType = data.cards
//   .filter((card) => card.typeId === 1)
//   .map(({ description, img, ...card }) => card);

const getCardsByType = (cardType) =>
  data.cards
    .filter((card) => cardType === card.typeId)
    .map((card) => ({ typeId: card.typeId, name: card.name }));

console.log(getCardsByType(3));
