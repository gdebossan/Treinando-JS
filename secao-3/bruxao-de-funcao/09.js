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

function mostrarRanking() {
  for (let i = 0; i < pontosDasCasas.length; i++) {
    for (let j = i + 1; j < pontosDasCasas.length; j++) {
      if (pontosDasCasas[j][1] > pontosDasCasas[i][1]) {
        const [elementoRemovido] = pontosDasCasas.splice(j, 1);
        pontosDasCasas.splice(i, 0, elementoRemovido);
      }
    }
  }
  console.log(pontosDasCasas);
}

adicionarPontos();
console.log("");
mostrarRanking();
