const fetchAPI = async (id) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();

  // data.users.forEach((user) => {
  //   console.log(user.firstName);
  // });

  // console.log(data.users[1].firstName);
  console.log(data);
};

fetchAPI(400);
