//O for/of nos permite criar loops em objetos iteráveis como strings,
//arrays, entre outros, mas vamos focar somente nesses dois!

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}

// resultado:
//1
//2
//3
//4
//5

// laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros
//Vamos para outro exemplo:

let word = "Hello";
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

//com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]
