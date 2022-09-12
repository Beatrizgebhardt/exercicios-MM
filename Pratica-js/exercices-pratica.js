//Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional
// (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||).
// Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner, você pode ver
//mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b,
// definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)
//*Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉

const a = 20;
const b = 10;

console.log("adição: " + (a + b));
console.log("subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("divisão: " + a / b);
console.log("módulo: " + (a % b));

//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas
// constantes com os valores que serão comparados.

const numeroX = 50;
const numeroY = 20;

if (numeroX > numeroY) {
  console.log("'NúmeroX' é maior que 'NumeroY'");
} else {
  console.log("'NumeroY'é maior que 'NúmeroX'");
}

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes
// com os valores que serão comparados.
const numberA = 20;
const numberB = 15;
const numebrC = 10;

if (numberA > numberB && numberA > numebrC) {
  console.log("O maior número é: " + numberA + "(a)");
} else if (numberB > numberA && numberB > numebrC) {
  console.log("O maior número é: " + numberB + "(b)");
} else {
  console.log("O maior número é: " + numebrC + "(c)");
}

//4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo,
// "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

const definicao = 12;

if (definicao > 0) {
  console.log("positive");
} else if (definicao < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//5 - 🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const valor1 = 20;
const valor2 = 60;
const valor3 = 100;

if (valor1 < 0 || valor2 < 0 || valor3 < 0) {
  console.log("invalido");
} else if (valor1 + valor2 + valor3 === 180) {
  console.log("valido");
} else {
  console.log("false");
}

//6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto
//com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaDeXadrez = "bispo";

switch (pecaDeXadrez.toLowerCase()) {
  case "rei":
    console.log("Rei -> Uma casa apenas para qualquer direção");
    break;
  case "rainha":
    console.log("Rainha -> Diagonal, horizontal e vertical");
    break;
  case "bispo":
    console.log("Bispo -> Diagonal");
    break;
  case "cavalo":
    console.log("Cavalo -> Horizontal e vertical");
    break;
  case "peão":
    console.log("Peão -> Apenas uma casa para frente, no prmeiro movimento podem ser duas casas");
    break;
  default:
    console.log("Erro, peça inválida");
}

//7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
// Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const porcentagem = 60;

if (porcentagem < 0 || porcentagem > 100) {
  console.log("inválido");
} else if (porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//8 - 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.
const num = 3;
const num2 = 2;
const num3 = 8;
if (num % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
}

//9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.
// Caso contrário, ele retorna false.
//Bonus: use somente um if.
const number = 3;
const number2 = 2;
const number3 = 8;
if (num % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log(true);
}

//10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto
// e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto)
// a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20%
// também faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)

let valorCusto = 100;
let valorVenda = 130;
let impostoSobreOCusto = 100 * 0.01 * 20;
let valorCustoTotal = valorCusto + impostoSobreOCusto;

let lucro = valorVenda - valorCustoTotal;
let lucroFinal = lucro * 1000;
console.log({ lucroFinal });

//11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

/*let salarioBruto = 1500;
let inss
if (salarioBruto <=1556.94) {
    inss = salarioBruto * 0.01 * 8;
} if else(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.01 * 9;
} if else ( salarioBruto>= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.01 * 11;
} else{
    inss = 570.88;
}*/

//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
//O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//R$ 2.670,00: salário com INSS já deduzido;
//7.5%: alíquota de imposto de renda;
//R$ 142,80 parcela a se deduzir do imposto.
//Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
//Resultado: R$ 2.612,55.
//Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.0;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

//console.log(baseSalary);

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.8;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.8;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
}
console.log("Salário Líquido: " + (baseSalary - aliquotIR));
