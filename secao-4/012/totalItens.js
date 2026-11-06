const menu = require("./menu");
const getMcInfo = require("./relatorio");

const totalItens = (data) => {
  const items = getMcInfo(data);
  const values = Object.values(items);
  let total = 0;

  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
};

console.log(`Total de itens vendidos: ${totalItens(menu)}`);
