const feiticos = [
  "Alorromora",
  "Lumos",
  "Accio",
  "Avada Kedavra",
  "Imperio",
  "Crucio",
  "Avada Kedavra",
  "Accio",
  "Expecto Patronum",
  "Estupefaca",
  "Expelliarmus",
  "Alorromora",
  "Wingardium Leviosa",
  "Expecto Patronum",
  "Accio",
];

// function listarFeiticosUnicos() {
//   const feiticosUnicos = new Set(feiticos);
//   console.log(feiticosUnicos);
// }

function listarFeiticosUnicos() {
  const feiticosUnicos = [];
  for (let i = 0; i < feiticos.length; i++) {
    if (!feiticosUnicos.includes(feiticos[i])) {
      feiticosUnicos.push(feiticos[i]);
    }
  }
  console.log(feiticosUnicos);
}

listarFeiticosUnicos();
