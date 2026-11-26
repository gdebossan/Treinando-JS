const contarAlunos = (array) => {
  let totalArray = 0;
  for (const elemento of array) {
    totalArray += 1;
  }
  console.log(`Total de alunos: ${totalArray}`);
};

const nomeAlunos = ["Debossan", "Gabriel", "Henrique"];
contarAlunos(nomeAlunos);
