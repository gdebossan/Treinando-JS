const data = require("../data.json");

const getCardNames = (cards) => cards.map((card) => card.name);

console.log(getCardNames(data.cards));
