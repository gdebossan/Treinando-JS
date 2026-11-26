const data = require("../data.json");

const avgATKCards = (cards) =>
  cards
    .map(({ atk }) => atk)
    .filter((atk) => atk !== undefined)
    .reduce((acc, cur, _, array) => acc + cur / array.length, 0)
    .toFixed(2);

console.log(avgATKCards(data.cards));
