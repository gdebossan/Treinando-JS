const usuarios = [
  {
    id: 1,
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
  },
  {
    id: 2,
    email: "teste123@gmail.com",
    info: {
      nome: "Peralta",
      sobrenome: "Jake",
      endereco: {
        rua: "Rual Teste, 456 - Fundos",
        cidade: "Santana",
        estado: "Rio Grande",
        pais: "Groelandia",
      },
    },
  },
  {
    id: 3,
    email: "teste3@gmail.com",
    info: {
      nome: "Joao",
      sobrenome: "Lake",
      endereco: {
        rua: "Rual Teste, 456 - Fundos",
        cidade: "Santana",
        estado: "Rio Grande",
        pais: "Brasil",
      },
    },
  },
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i]["info"]["nome"]);
}
