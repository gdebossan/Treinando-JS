const dados = require("./customers.json");

const filterState = (data, state) => {
  const stateElements = [];

  for (let i = 0; i < data["guests"].length; i++) {
    // console.log(data["guests"][i]["address"]["state"]);
    if (data["guests"][i]["address"]["state"] == state) {
      stateElements.push(data["guests"][i]);
    }
  }

  return stateElements;
};

console.log(filterState(dados, "Wisconsin"));
