const fetchApi = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();

  console.log(data);
  // return data; -> sempre retorna uma promise
};

fetchApi();
// console.log(fetchApi());

// async - assincrono
// await - esperar
