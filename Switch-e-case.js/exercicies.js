//Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo,
// que pode ser: 'aprovada', 'lista' ou 'reprovada';

let pessoaCandidata = "reprovada";

//Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado
// da Caso 'aprovada', imprima "Parabéns, você foi aprovada(o)!".
//Caso 'lista', imprima "Você está na nossa lista de espera".
//Caso 'reprovada', imprima "Você foi reprovada(o)".
//Caso default, imprima a mensagem de "não se aplica".

switch (pessoaCandidata) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("não se aplica");
    break;
}
