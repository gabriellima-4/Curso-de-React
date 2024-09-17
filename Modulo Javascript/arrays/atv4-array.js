//produto: declare um array e exiba o produto (multiplicação) de todos os elementos.

let numeros = [2,4,7,9,10];
let produto = 1;

numeros.forEach((item) => {
    produto *= item
});

console.log(produto);
