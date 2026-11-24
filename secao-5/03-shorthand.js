const database = require("./data.json");

// const addProperty = data.cards.map((card) => {
//   const id = card.id;
//   const name = card.name;
//   const newElement = {
//     id,
//     name,
//     game: "Yu-Gi-Oh!",
//   };
//   return newElement;
// });

const addProperty = (data, propName, propValue) => {
  return data.map((element) => {
    const id = element.id;
    const name = element.name;

    const newElement = {
      id,
      name,
      [propName]: propValue,
    };
    return newElement;
  });
};

console.log(addProperty(database.cards, "game", "Yu-Gi-Oh!"));
