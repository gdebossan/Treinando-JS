// 1 - Relatório de nacionalidades únicas

const nacionalidades = [
  "Brasil",
  "Espanha",
  "Italia",
  "Argentina",
  "Franca",
  "Alemanha",
  "Portugal",
  "Uruguai",
  "Holanda",
  "Inglaterra",
  "Brasil",
  "Italia",
  "Espanha",
  "Chile",
  "Colombia",
  "Mexico",
  "Estados Unidos",
  "Japao",
  "Coreia do Sul",
  "Australia",
  "Canada",
  "Belgica",
  "Croacia",
  "Suecia",
  "Noruega",
  "Dinamarca",
  "Brasil",
  "Argentina",
  "Portugal",
  "Italia",
];

const paisesUnicos = [];

for (let i = 0; i < nacionalidades.length; i++) {
  for (let j = 0; j < nacionalidades.length; j++) {
    if (!paisesUnicos.includes(nacionalidades[j])) {
      paisesUnicos.push(nacionalidades[j]);
    }
  }
}

console.log(paisesUnicos);
