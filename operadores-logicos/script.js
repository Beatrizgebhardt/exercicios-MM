const comida = "pão na chapa";
const bebida = "cafezinho";

if (bebida === "cafezinho" && comida === "pão na chapa") {
  console.log("Muito obrigado pela refeição :)");
} else {
  console.log("Acho que houve um engano com meu pedido");
}
//
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); // false pois uma das duas consições é falsa

//
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(cenouras && leite && arroz && feijao); //true
//

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR
const bebidaPrincipal = "cafezinho";
const bebidaAlternativa = "suco de laranja";

if (bebidaPrincipal === "cafezinho" || bebidaAlternativa === "suco de laranja") {
  console.log("Obrigado por me atender :D");
} else {
  console.log("Ei, eu não pedi isso!");
}
//
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//NOT

console.log(2 + 2 === 4); // true

console.log(!(2 + 2) === 4); // false (quando inserimos o operdor NOT =, ele nosda um valor contrário)
//
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false
//
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
//
console.log(!null); // true
//
console.log(!undefined); // true
