const data = require("../data.json");

const cardsOrderByDEF = (cards) =>
  cards
    .filter(({ def }) => def !== undefined)
    .sort((a, b) => b.def - a.def)
    .map(({ id, name, def }) => ({ id, name, def }))
    .slice(0, 5);

console.log(cardsOrderByDEF(data.cards));
