const times = [
  "Real Madrid",
  "Barcelona",
  "São Paulo",
  "Milan",
  "Inter de Milao",
];

let mensagemFinal = "==== RESULTADOS DOS JOGOS ====\n\n";
let pontosPorTime = Array(times.length).fill(0);
let finalistas = [];
let maiorPontuacao = 0;

for (let i = 0; i < times.length; i++) {
  for (let j = i + 1; j < times.length; j++) {
    const golsTimeI = Math.floor(Math.random() * 6);
    const golsTimeJ = Math.floor(Math.random() * 6);

    mensagemFinal += `${times[i]} ${golsTimeI} x ${golsTimeJ} ${times[j]}\n`;

    if (golsTimeI > golsTimeJ) {
      pontosPorTime[i] += 3;
    } else if (golsTimeJ > golsTimeI) {
      pontosPorTime[j] += 3;
    } else {
      pontosPorTime[i]++;
      pontosPorTime[j]++;
    }
  }
}

mensagemFinal += "\n==== TABELA DE PONTOS ====\n\n";

for (let i = 0; i < times.length; i++) {
  mensagemFinal += `${times[i]}: ${pontosPorTime[i]} pontos\n`;

  if (pontosPorTime[i] > maiorPontuacao) {
    maiorPontuacao = pontosPorTime[i];
  }
}

for (let i = 0; i < times.length; i++) {
  if (pontosPorTime[i] === maiorPontuacao) {
    finalistas.push(times[i]);
  }
}

// Caso tenha final
if (finalistas.length > 1) {
  mensagemFinal += "\n==== FINAL ====\n";

  while (finalistas.length > 1) {
    const timeA = finalistas.shift();
    const timeB = finalistas.shift();

    const golsA = Math.floor(Math.random() * 6);
    const golsB = Math.floor(Math.random() * 6);

    mensagemFinal += `\n${timeA} ${golsA} x ${golsB} ${timeB}\n`;

    let vencedor;

    if (golsA > golsB) {
      vencedor = timeA;
    } else if (golsB > golsA) {
      vencedor = timeB;
    } else {
      vencedor = Math.random() < 0.5 ? timeA : timeB;
      mensagemFinal += `Vencedor nos pênaltis: ${vencedor}\n`;
    }

    mensagemFinal += `Classificado: ${vencedor}\n`;
    finalistas.push(vencedor);
  }
}

mensagemFinal += `\n==== CAMPEÃO ====\n${finalistas[0]}`;

console.log(mensagemFinal);
