const menu = require("./menu");

const getMcInfo = (data) => {
  const report = {
    sandwiches: 0,
    sideDishes: 0,
    desserts: 0,
    drinks: 0,
  };

  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i += 1) {
    switch (keys[i]) {
      case "sandwiches":
        report.sandwiches = data[keys[i]].length;
        break;
      case "sideDishes":
        report.sideDishes = data[keys[i]].length;
        break;
      case "desserts":
        report.desserts = data[keys[i]].length;
        break;
      case "drinks":
        report.drinks = data[keys[i]].length;
        break;
    }
  }
  return report;
};

module.exports = getMcInfo;
