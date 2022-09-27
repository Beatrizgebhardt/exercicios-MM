let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log(numbers);

//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
var soma = 0;
for (var i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log(soma);

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
var soma = 0;
for (var i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
let media = soma / numbers.length;

console.log(media);

//4 -Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
var soma = 0;
for (var i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
soma = soma / numbers.length;

if (soma > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}
console.log(maiorNumero);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima
// a mensagem: "nenhum valor ímpar encontrado";
var result = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(result);
}

//7 -Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}

console.log("menorNumero");
console.log(menorNumero);

//8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let novoArray = [];
for (let i = 0; i <= 25; ++i) {
  novoArray.push(i);
}
console.log(novoArray);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let i = 0; i < novoArray.length; ++i) {
  console.log(novoArray[i] / 2);
}
