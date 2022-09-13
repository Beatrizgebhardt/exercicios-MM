// ao ives de criar todas essas variáveis, criar uma array;

let pizza1 = "4 queijos";
let pizza2 = "Frango com catupiry";
let pizza3 = "Marguerita";
let pizza4 = "Palmito";
let pizza5 = "Chocolate";

let pizzas = ["4 queijos", "Frango com catupiry", "Marguerita", "Palmito", "Chocolate"];

pizzas[5] = "Peito de peru";
//ou
pizzas.push("Peito de peru"); // acrescentar ou substituir
pizzas.push("Gratinada");

console.log(pizzas.length); // para saber quantos tem
console.log(pizzas.sort()); // ordem alfabetica ou por números crescentes
console.log(pizzas[0]); //para trazer um unico elemento dentro do array

//LOOP

for (let index = 0; index < pizzas.length; index += 1) {
  console.log(pizzas[index]);
}
