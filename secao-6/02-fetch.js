fetch("https://dummyjson.com/quotes/random")
  .then((response) => response.json())
  .then((data) => console.log(data));

// console.log(result);
