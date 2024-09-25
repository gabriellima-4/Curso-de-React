/*
Criar uma função que recebe dois elementos de um array e retorna os numeros primos existentes ENTRE eles.
*/

// "Para determinar se um certo número inteiro pequeno é primo, basta dividi-lo por todos os primos menores ou iguais à sua raiz quadrada."

function numeroPrimo(numero){
    if(numero < 2){
        return false;
    }
    
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

// function maiorNumero (a, b){
//     if (a > b) {
//         return a
//     }
//     if (b > a){
//         return b
//     }
//     return console.error("va se fude");
    
// }

// function menorNumero (a, b){
//     if (a < b) {
//         return a
//     }
//     if (b < a){
//         return b
//     }
//     return console.error("va se fude");
    
// }


function primosNoArray (array, indice1, indice2){
    
    let limiteInf = Math.min(array[indice1], array[indice2]);
    //limiteInf = menorNumero((array[indice1], array[indice2]);

    let limiteSup = Math.max(array[indice1], array[indice2]);
    //limiteSup = maiorNumero(array[indice1], array[indice2]);
    
    let arrayResultante = []
    
    for (let i = limiteInf; i < limiteSup; i++) {
        if(numeroPrimo(i) == true){
            arrayResultante.push(i);
        }
    }

    return arrayResultante
}