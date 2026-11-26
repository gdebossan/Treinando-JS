const fetchAPI = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );
    const data = await response.json();

    // console.log(data.moves[1].move.name);
    // const moves = data.moves;
    // console.log(moves);
    // const moveList = moves.map((move) => move.move.name);

    console.log(data.moves.map((move) => move.move.name));
  } catch (error) {
    console.log(error.message);
  }
};

fetchAPI("pikachu");
