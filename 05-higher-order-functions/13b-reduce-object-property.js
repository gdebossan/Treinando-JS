const data = require("./data.json");

const sumProperty = (data, propName) =>
  data.reduce((acc, cur) => acc + (cur[propName] || 0), 0);

console.log(sumProperty(data.cards, "def"));
