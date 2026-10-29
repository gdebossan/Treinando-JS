const array1 = [10, 3, 7, 5];
const array2 = [7, 72, 11, 3];
let contador = 0;

for (let index = 0; index < array1.length; index++) {
  for (let y = 0; y < array2.length; y++) {
    if (array1[index] == array2[y]) {
      console.log(`${array1[index]} eh igual ${array2[y]}`);
      contador++;
    }
  }
}

console.log(`Contador = ${contador}`);
