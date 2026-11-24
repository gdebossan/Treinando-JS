const data = require("./data.json");
const random = require("./07-sort");

const arrayNumbers = random(10);

console.log(arrayNumbers);

const result = arrayNumbers.forEach((number) => console.log(number * 2));

console.log(result);
