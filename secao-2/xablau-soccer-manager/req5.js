// 5 - Adição de patrocinador

const times = [
  "Real Madrid",
  "Barcelona",
  "Corinthians",
  "Milan",
  "Inter de Milao",
];

const patrocinadores = [
  ["Emirates", "Adidas", "HP"], // Real Madrid
  ["Nike", "Spotify", "Beko"], // Barcelona
  ["Neo Quimica", "Nike"], // Corinthians
  ["Puma", "Emirates", "MSC"], // Milan
  ["Nike", "Pirelli", "Lenovo"], // Inter de Milao
];

for (let i = 0; i < patrocinadores.length; i++) {
  patrocinadores[i].push("Xablau");
}

for (let i = 0; i < times.length; i++) {
  console.log(`Patrocinadores do ${times[i]}: ${patrocinadores[i]}`);
}
