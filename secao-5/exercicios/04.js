const data = require("../data.json");

const getCardByName = (cards, infoName) => {
  return cards.filter(({ name }) =>
    name.toLowerCase().includes(infoName.toLowerCase()),
  );
};

console.log(getCardByName(data.cards, "Blue-Eyes"));
