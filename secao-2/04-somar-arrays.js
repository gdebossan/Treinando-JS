const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let soma = 0;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  soma += element;
}

console.log(soma);
