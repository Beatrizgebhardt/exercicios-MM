//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
//10! = 2 x 1 x 5 x 1 = 10

//1 -Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
// Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo,
// depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "trybe";
let inverter = " ";

for (let index = word.length - 1; index >= 0; index--) {
  inverter += word[index];
}
console.log(inverter);

//

//Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse
// array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index++) {
  if (biggestWord.length < array[index].length) {
    biggestWord = array[index];
  }
  if (smallestWord.length > array[index].length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja,
// é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo
// entre 2 e 50.

let maiorNumeroPrimo = 0;

for (let index = 2; index <= 50; index++) {
  let teveResto = false;
  for (let i = 2; i < index; i++) {
    if (index % i === 0) {
      teveResto = true;
    }
  }

  if (!teveResto) {
    maiorNumeroPrimo = index;
  }
}
console.log(maiorNumeroPrimo);
