const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculadora = (num1, num2, operador) => {
  return operador(num1, num2);
};

console.log(calculadora(5, 4, sum));
console.log(calculadora(5, 4, sub));
