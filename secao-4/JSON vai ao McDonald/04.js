const dados = require("./dados.json");

const counterGender = (data) => {
  const totalGender = {
    male: 0,
    female: 0,
  };

  for (let i = 0; i < data.guests.length; i++) {
    if (data.guests[i].gender === "male") {
      totalGender.male += 1;
    } else if (data.guests[i].gender === "female") {
      totalGender.female += 1;
    }
  }
  return totalGender;
};

console.log(counterGender(dados));
