const data = require("../data.json");

const getCardsAboveAttack = (cards, minAttack) => {
  return cards
    .filter(({ atk }) => atk > minAttack)
    .map(({ id, name, atk }) => ({ id, name, atk }));
};

console.log(getCardsAboveAttack(data.cards, 2500));
