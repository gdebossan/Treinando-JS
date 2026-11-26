const angulo1 = 60;
const angulo2 = 60;
const angulo3 = -60;

const somaAngulos = angulo1 + angulo2 + angulo3;

const angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
  if (somaAngulos == 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: angulo invalido!");
}
