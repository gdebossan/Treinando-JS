const pontosDasCasas = [
  ["Grifinoria", 0],
  ["Sonserina", 0],
  ["Corvinal", 0],
  ["Lufa-Lufa", 0],
];

function adicionarPontos() {
  for (let i = 0; i < pontosDasCasas.length; i++) {
    pontosDasCasas[i][1] += Math.floor(Math.random() * (100 + 1));
  }
  console.log(pontosDasCasas);
}

adicionarPontos();
