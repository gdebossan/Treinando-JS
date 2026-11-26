const pecaXadrez = "Xablau";

switch (pecaXadrez) {
  case "Rei":
    console.log("Rei -> Uma casa para qualquer direcao");
    break;
  case "Dama":
    console.log(
      "Dama -> Pode se morvar em qualquer direcao (vertical, horizontal e diagonal), e em quantas casas quiser, desde que estejam livres",
    );
    break;
  case "Torre":
    console.log(
      "Torre -> Pode se mover em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser",
    );
    break;
  case "Bispo":
    console.log("Bispo -> Diagonais");
    break;
  default:
    console.log("Erro: Peca Invalida");
}
