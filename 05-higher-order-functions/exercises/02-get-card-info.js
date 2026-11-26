const data = require("../data.json");

const getInfoCard = (arry) =>
  arry.map(({ name, atk }) =>
    atk ? `${name} - ATK:${atk}` : `${name} - ATK: N/A`,
  );

console.log(getInfoCard(data.cards));
