const fetchAPI = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchAPI(-5);
