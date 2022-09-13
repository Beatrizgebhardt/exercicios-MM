var numero = 7;

console.log(numero * 1);
console.log(numero * 2);
console.log(numero * 3);
console.log(numero * 4);
console.log(numero * 5);
console.log(numero * 6);
console.log(numero * 7);
console.log(numero * 8);
console.log(numero * 9);

//ou

for (var contador = 1; contador <= 9; contador = contador + 1) {
  console.log(numero * contador);
}

// FOR E ARRAY

var listaDeNomes = ["Joana", "Maria", "Lucas"];

for (var indice = 0; indice < listaDeNomes.length; indice++) {
  var mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
  console.log(mensagem);
}
