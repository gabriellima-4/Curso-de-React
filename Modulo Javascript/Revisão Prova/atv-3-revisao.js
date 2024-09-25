/*
Crie uma lista de inteiros com 10 elementos. Calcule e imprima a soma dos
elementos nas posições pares da lista.
*/

lista = [1,22,39,42,53,60,76,81,92,100]
let i = 0;
let soma = 0;


for (i; i < lista.length; i++){
    if (i % 2 == 0) {
        soma += lista[i];
    }
}

console.log(soma);
