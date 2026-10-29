// 2 - Verificar patrocinador

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
  ["Neo Quimica", "Nike", "LINUXtips"], // Corinthians
  ["Puma", "Emirates", "MSC"], // Milan
  ["Nike", "Pirelli", "Lenovo"], // Inter de Milao
];

for (let i = 0; i < times.length; i++) {
  for (let j = 0; j < 1; j++) {
    if (
      times[i].includes("Real Madrid") &&
      patrocinadores[i].includes("Adidas")
    ) {
      console.log(true);
    }
  }
}
