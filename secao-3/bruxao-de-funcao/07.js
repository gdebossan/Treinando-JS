const casasAlunos = [
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Corvinal",
  "Sonserina",
  "Lufa-Lufa",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Corvinal",
  "Lufa-Lufa",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Corvinal",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Grifinoria",
  "Sonserina",
  "Sonserina",
  "Sonserina",
  "Sonserina",
  "Grifinoria",
  "Corvinal",
  "Corvinal",
  "Corvinal",
  "Lufa-Lufa",
  "Lufa-Lufa",
  "Lufa-Lufa",
  "Lufa-Lufa",
];

const casas = ["Grifinoria", "Sonserina", "Corvinal", "Lufa-Lufa"];

// function contarAlunosPorCasa() {
//   let grifinoria = 0,
//     sonserina = 0,
//     corvinal = 0,
//     lufaLufa = 0;
//   for (let i = 0; i < casasAlunos.length; i++) {
//     if (casasAlunos[i] === "Grifinoria") {
//       grifinoria += 1;
//     } else if (casasAlunos[i] === "Sonserina") {
//       sonserina += 1;
//     } else if (casasAlunos[i] === "Corvinal") {
//       corvinal += 1;
//     } else if (casasAlunos[i] === "Lufa-Lufa") {
//       lufaLufa += 1;
//     } else {
//       console.log(`Casa ${casasAlunos[i]} nao encontrada`);
//     }
//   }
//   console.log(`Total casas:
//     Grifinoria: ${grifinoria}
//     Sonserina: ${sonserina}
//     Corvinal: ${corvinal}
//     Lufa-Lufa: ${lufaLufa}`);
// }

function contarAlunosPorCasa() {
  let totalPorCasa = [];
  for (let index = 0; index < casas.length; index++) {
    totalPorCasa.push([casas[index], 0]);
    for (let j = 0; j < casasAlunos.length; j++) {
      if (casasAlunos[j] === casas[index]) {
        totalPorCasa[index][1] += 1;
      }
    }
  }
  console.log(totalPorCasa);
}

contarAlunosPorCasa();
