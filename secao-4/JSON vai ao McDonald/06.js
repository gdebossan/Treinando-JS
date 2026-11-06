const dados = require("./dados.json");

const changePicture = (data, link) => {
  const elementosAlterados = [];
  for (let i = 0; i < data["guests"].length; i++) {
    // console.log(data["guests"][i]["picture"]);

    data["guests"][i]["picture"] = link;
    elementosAlterados.push(data["guests"][i]);

    // console.log(data["guests"][i]["picture"]);
  }
  return elementosAlterados;
};

console.log(changePicture(dados, "https://picsum.photos/200/300"));
