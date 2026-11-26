const data = require("../data.json");

const ranking = (cards) => {
  const totalByType = cards
    .filter(({ atk }) => atk != null)
    .reduce((acc, { typeId, atk }) => {
      acc[typeId] = (acc[typeId] ?? 0) + atk;

      return acc;
    }, {});

  return Object.entries(totalByType)
    .map(([typeId, totalAtk]) => ({
      typeId: Number(typeId),
      totalAtk,
    }))
    .sort((a, b) => b.totalAtk - a.totalAtk)
    .slice(0, 3);
};

console.log(ranking(data.cards));
