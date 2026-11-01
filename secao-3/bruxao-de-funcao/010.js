const alunos = [
  "Harry",
  "Hermione",
  "Rony",
  "Luna",
  "Draco",
  "Gus",
  "Neville",
  "Ginny",
  "Fred",
  "George",
  "Percy",
  "Cho",
  "Cedrico",
  "Seamus",
  "Dean",
  "Parvati",
  "Padma",
  "Angelina",
  "Katie",
  "Alicia",
  "Oliver",
  "Colin",
  "Dennis",
  "Lavender",
  "Pansy",
  "Blaise",
  "Gregory",
  "Vincent",
  "Lee",
  "Terry",
  "Michael",
  "Anthony",
  "Susan",
  "Hannah",
  "Ernie",
  "Justin",
];

const casas = ["Grifinoria", "Sonserina", "Corvinal", "Lufa-Lufa"];

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

function alunosPorCasa(casa) {
  const nomes = [];

  for (let i = 0; i < casasAlunos.length; i++) {
    if (casasAlunos[i] === casa) {
      nomes.push(alunos[i]);
    }
  }
  return nomes;
}

console.log(alunosPorCasa("Sonserina"));
alunosPorCasa();
