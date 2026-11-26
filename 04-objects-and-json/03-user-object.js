const usuario = {
  id: 99,
  email: "email@gmail.com",
  info: {
    nome: "Jake",
    sobrenome: "Peralta",
    endereco: {
      rua: "Rual Teste, 456 - Fundos",
      cidade: "Santana",
      estado: "Rio Grande",
      pais: "Groelandia",
    },
  },
};

console.log(Object.keys(usuario["info"]["endereco"]));
console.log(usuario["info"]["endereco"]["rua"]);
