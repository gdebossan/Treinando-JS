const randomNumbers = (arrayLength) => {
  const array = [];

  for (let index = 0; index < arrayLength; index += 1) {
    array.push(Math.ceil(Math.random() * 100));
  }

  return array;
};

const arrayNumbers = randomNumbers(100);

const sortArray = arrayNumbers.sort((a, b) => a - b);
// console.log(sortArray);

module.exports = randomNumbers;
