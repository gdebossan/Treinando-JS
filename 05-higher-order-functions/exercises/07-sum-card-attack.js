const data = require("../data.json");

const sumCardsAtk = (arry) =>
  arry.reduce((acc, cur) => acc + (cur.atk ?? 0), 0);

console.log(sumCardsAtk(data.cards));
