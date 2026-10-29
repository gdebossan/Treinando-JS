// 7 - Todos contra todos

const times = [
  "Real Madrid",
  "Barcelona",
  "Corinthians",
  "Milan",
  "Inter de Milao",
];

for (let i = 0; i < times.length; i++) {
  for (let j = i + 1; j < times.length; j++) {
    if (!times[i].includes(times[j])) {
      console.log(`${times[i]} x ${times[j]}`);
    }
  }
}
