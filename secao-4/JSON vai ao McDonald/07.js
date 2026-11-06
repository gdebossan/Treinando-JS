const dados = require("./dados.json");

const sexCount = (data, report) => {
  for (let i = 0; i < data["guests"].length; i++) {
    if (data["guests"][i]["gender"] === "male") {
      report.totalGender.male += 1;
    } else if (data["guests"][i]["gender"] === "female") {
      report.totalGender.female += 1;
    }
  }

  return report.totalGender;
};

const avgAge = (data, report) => {
  for (let i = 0; i < data.guests.length; i++) {
    report.avgAge += data.guests[i].age;
  }

  if (report.totalGuests === 0) {
    return 0;
  }

  report.avgAge /= report.totalGuests;
  report.avgAge = Number(report.avgAge.toFixed(2));

  return report.avgAge;
};

const listCountries = (data, report) => {
  for (let i = 0; i < data["guests"].length; i++) {
    if (!report.countries.includes(data["guests"][i]["country"])) {
      report.countries.push(data["guests"][i]["country"]);
    }
  }

  return report.countries.sort();
};

const generateReport = (data) => {
  const report = {
    totalGuests: 0,
    totalGender: { male: 0, female: 0 },
    avgAge: 0,
    countries: [],
  };

  report.totalGuests = data["guests"].length;

  sexCount(data, report);
  avgAge(data, report);
  listCountries(data, report);

  return report;
};

console.log(generateReport(dados));
