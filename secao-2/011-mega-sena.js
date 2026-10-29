const numerosEscolhidos = [];

for (let i = 0; i < 6; i++) {
  let numero = Math.ceil(Math.random() * 60);
  if (numerosEscolhidos.includes(numero)) {
    i--;
  } else {
    numerosEscolhidos.push(numero);
  }
}

console.log(numerosEscolhidos);

const numerosMegaSena = [16, 42, 15, 23, 4, 3];

let qtdeAcertos = 0;
let acertos = [];

for (let i = 0; i < numerosEscolhidos.length; i++) {
  for (let j = 0; j < numerosMegaSena.length; j++) {
    if (numerosEscolhidos[i] == numerosMegaSena[j]) {
      acertos.push(numerosEscolhidos[i]);
      qtdeAcertos++;
    }
  }
}

console.log(`Qtde de Acertos: ${qtdeAcertos}.`);
console.log(`Numeros acertados: ${acertos}.`);
