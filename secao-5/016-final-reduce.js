const data = require("./data.json");

const report = () => {
  return data.types.reduce((acc, type) => {
    acc[type.name] = data.cards.filter(
      ({ typeId }) => typeId === type.id,
    ).length;
    return acc;
  }, {});
};

console.log(report());
