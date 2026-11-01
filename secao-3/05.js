const numeros = [10, 78, 2, 3, 0, -5, 99];

const maiorEMenorNumero = (array) => {
  let maiorNumero = array[0];
  let menorNumero = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    } else if (array[i] < array[i + 1]) {
      menorNumero = array[i];
    }
  }

  return [maiorNumero, menorNumero];
};

console.log(`Maior: ${maiorEMenorNumero(numeros)[0]}`);
console.log(`Menor: ${maiorEMenorNumero(numeros)[1]}`);
