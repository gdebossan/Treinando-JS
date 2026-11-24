const database = require("./data.json");

const addProperty = (data, propName, propValue) =>
  data.map((element) => ({ ...element, [propName]: propValue }));

console.log(addProperty(database.cards, "game", "Yu-Gi-Oh!"));
