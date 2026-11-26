const fetchAPI = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await response.json();
    const result = {
      rua: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    };
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchAPI("87030080");
