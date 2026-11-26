const menu = require("./menu-data");

const moreExpensive = (data, category) => {
  const products = data[category];
  let mostExpensive = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  return `O produto mais caro é: ${mostExpensive.name}, que custa: R$${mostExpensive.price.toFixed(2)}.`;
};

console.log(moreExpensive(menu, "sideDishes"));
