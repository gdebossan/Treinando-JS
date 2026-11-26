const conta = {
  agencia: "0975",
  banco: {
    codigo: "012",
    id: 4,
    nome: "Santander",
  },
};

// dot notation
console.log(conta.banco.id);

// bracket notation []
console.log(conta["banco"]["nome"]);
