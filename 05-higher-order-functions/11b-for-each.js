const data = require("./data.json");

const addProperty = (propKey, propValue) =>
  data.types.forEach((type) => (type[propKey] = propValue));

addProperty("game", "Yugioh!");

console.log(data.types);
