const data = require("./data.json");

const newArray = [];

for (let i = 0; i < data.cards.length; i++) {
  newArray.push(data.cards[i].name);
}
// console.log(newArray);

const newArrMap = data.cards.map((card) => card.name);

console.log(newArrMap);

// retorna um novo array
