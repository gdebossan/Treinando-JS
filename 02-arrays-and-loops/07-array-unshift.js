const array = ["Morango", "Laranja", "Limao"];

console.log(array);

array.unshift("Abacaxi");

console.log(array);

// nao muito recomendado usar o unshift pois tem um custo de memoria e reprocessamento do array, pois ele vai realocar os indices dos arrays
