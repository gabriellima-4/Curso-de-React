//Soma dos números pares: Calcule a soma dos números pares até 100.

let numero = 1
let soma = 0

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0){
//         numero += i;
//         console.log(numero);
//     }
// }

while (numero <= 100){
    if (numero % 2 == 0){
        soma += numero;
        console.log(soma);
    }
    numero++;
}
