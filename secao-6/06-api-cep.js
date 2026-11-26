const fetchAPI = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchAPI("87030080");
