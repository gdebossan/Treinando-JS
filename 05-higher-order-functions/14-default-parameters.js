const data = require("./data.json");

const sumProperty = (arry = [], propertyName = "atk") =>
  arry.reduce((acc, cur) => acc + (cur[propertyName] || 0), 0);

console.log(sumProperty(data.cards));
