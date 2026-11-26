const data = require("./data.json");

const cardNames = (data = []) => {
  if (data.length === 0) throw new Error("O array esta vazio");

  return data.reduce((acc, card, index, array) => {
    if (index === 0) return `${card.name}`;
    if (index === array.length - 1) return acc + `${card.name}.`;

    return acc + `, ${card.name}`;
  }, "");
};
console.log(cardNames(data.cards));
