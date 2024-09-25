/*
Crie uma função que receba uma lista de inteiros e retorne a média aritmética
dos valores.
*/

function mediaDeLista(lista) {
    let media = 0;
    let soma = 0;

    for (let i = 0; i < lista.length; i++){
        soma += lista[i];
    }

    media = soma / lista.length;
    return media
}

numeros = [2,5,8,9]
console.log(mediaDeLista(numeros));
