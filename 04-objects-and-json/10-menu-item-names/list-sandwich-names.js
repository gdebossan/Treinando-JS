const menu = require("./menu-data");
const nomesLanches = [];

for (let i = 0; i < menu.sandwiches.length; i++) {
  nomesLanches.push(menu.sandwiches[i].name);
}

console.log(nomesLanches);
