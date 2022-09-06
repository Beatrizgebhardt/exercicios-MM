//Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico,
// e atribua a ela um valor entre 1 e 100;
const note = 70;

//Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
//Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
//Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
//Se a nota for menor que 60, imprima "Você foi reprovada(o)"

if (note >= 70) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (note < 80 && note >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (note > 60) {
  console.log("Você foi reprovada(o)");
}

//Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo,
// e os operadores lógicos que se aplicam a cada situação.
const febre = 37.2;

if (febre >= 37.5) {
  console.log("Você está com febre");
} else if (febre <= 36 && febre >= 36.5) {
  console.log("sua temperatura está normal");
} else if (febre > 38) {
  console.log("Corra para o Hospital");
} else {
  console.log("fora de perigo");
}
