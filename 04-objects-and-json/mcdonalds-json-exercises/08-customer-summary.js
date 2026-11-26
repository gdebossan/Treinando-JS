const dados = require("./customers.json");

const generateReport = (data) => {
  const report = {
    totalGuests: data.guests.length,
    totalGender: { male: 0, female: 0 },
    avgAge: 0,
    countries: [],
  };

  let totalAge = 0;

  for (const guest of data.guests) {
    // Contabiliza os gêneros
    if (guest.gender === "male" || guest.gender === "female") {
      report.totalGender[guest.gender]++;
    }

    // Soma as idades
    totalAge += guest.age;

    // Adiciona países sem duplicação
    if (!report.countries.includes(guest.country)) {
      report.countries.push(guest.country);
    }
  }

  // Calcula a média de idade
  if (report.totalGuests > 0) {
    report.avgAge = Number((totalAge / report.totalGuests).toFixed(2));
  }

  report.countries.sort();

  return report;
};

console.log(generateReport(dados));
