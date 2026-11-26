// 4 - Contagem de jogadores por time

const times = [
  "Real Madrid",
  "Barcelona",
  "Corinthians",
  "Milan",
  "Inter de Milao",
];

const jogadoresPorTime = [
  ["Zinedine Zidane", "Ronaldo Fenomeno", "Roberto Carlos"], // Real Madrid
  [
    "Ronaldinho Gaucho",
    "Xavi Hernandez",
    "Carles Puyol",
    "Rivaldo",
    "Neymar",
    "Lionel Messi",
  ], // Barcelona
  ["Socrates", "Rivelino", "Marcelinho Carioca", "Cassio"], // Corinthians
  ["Paolo Maldini", "Kaka"], // Milan
  ["Javier Zanetti", "Adriano", "Zlatan Ibrahimovic"], // Inter de Milao
];

let soma = 0;
const relatorioJogadores = [];

for (let i = 0; i < times.length; i++) {
  for (let j = 0; j <= jogadoresPorTime.length; j++) {
    if (jogadoresPorTime[i][j]) {
      soma++;
    }
  }
  relatorioJogadores.push([`${times[i]}: ${soma}`]);
  soma = 0;
}

console.log(relatorioJogadores);
