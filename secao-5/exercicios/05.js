const data = require("../data.json");

const cardsByATK = (cards) => {
  return cards
    .filter(({ atk }) => atk !== undefined)
    .sort((a, b) => a.atk - b.atk)
    .map(({ id, name, atk }) => ({ id, name, atk }));
};

console.log(cardsByATK(data.cards));
