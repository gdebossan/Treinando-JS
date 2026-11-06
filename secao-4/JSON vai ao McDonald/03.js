const menu = require("./menu");

const addNewItem = (data, category, item, price, ingredients, calories) => {
  for (let i = 0; i < data[category].length; i++) {
    if (data[category][i].name === item) {
      return `O produto: "${item}" já existe!`;
    }
  }

  const newItem = {
    name: item,
    price,
    ingredients,
    calories,
  };

  data[category].push(newItem);

  return newItem;
};

// console.log(addNewItem(menu, "sandwiches", "Big Mac"));

console.log(
  addNewItem(
    menu,
    "sandwiches",
    "Big burger",
    4001.9,
    [
      "100 hambúrgueres",
      "mostarda",
      "ketchup",
      "cebola",
      "queijo cheddar",
      "pão com gergelim",
    ],
    320000,
  ),
);
