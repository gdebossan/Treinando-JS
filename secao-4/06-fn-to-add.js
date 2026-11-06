const cliente = {
  primeiroNome: "Gabriel",
  idade: 21,
  cargo: "Software Engineer",
};

const addPropriedade = (objeto, key, value) => {
  if (typeof objeto[key] === "undefined") {
    objeto[key] = value;
    console.log(objeto[key]);
  } else {
    console.log(`${objeto[key]} ja existe!`);
  }
};

addPropriedade(cliente, "sobrenome", "Debossan");
