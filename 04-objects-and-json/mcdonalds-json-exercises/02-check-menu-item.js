const menu = require("../10-menu-item-names/menu-data");

const checkItem = (data, category, item) => {
  for (let i = 0; i < data[category].length; i += 1) {
    //consigo testar o meu item nas 3 vezes!
    // console.log(item);

    // mostra o nome do item do menu naquela posicao
    //data[category][i]["name"]

    // console.log(data[category][i]["name"]);

    if (data[category][i].name === item) {
      return console.log(true);
    }
  }
  return console.log(false);
};

checkItem(menu, "sandwiches", "DUPLO QUARTEIRÃO");
