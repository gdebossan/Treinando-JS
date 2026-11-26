const data = require("../data.json");

const getHighestAtkByType = (data) =>
  data.cards
    .filter((card) => card.atk != null)
    .map(({ id, name, typeId, atk }) => ({
      id,
      name,
      typeId,
      atk,
    }))
    .reduce((acc, card) => {
      const storedCard = acc[card.typeId];

      if (!storedCard || card.atk > storedCard.atk) {
        acc[card.typeId] = card;
      }

      return acc;
    }, {});

console.log(getHighestAtkByType(data));
