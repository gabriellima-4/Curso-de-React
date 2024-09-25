/*
Crie uma lista com 10 elementos e uma nova lista que contenha apenas os
elementos da primeira lista que são maiores que 5. Imprima a nova lista.
*/

lista = [1,3,5,9,10,14,2,20,44,95]
maioresQueCinco = []

for (let i = 0; i < lista.length; i++){
    if(lista[i] > 5){
        maioresQueCinco.push(lista[i]);
    }
}
console.log(maioresQueCinco);
