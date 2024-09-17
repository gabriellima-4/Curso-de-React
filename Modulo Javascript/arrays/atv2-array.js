//MAIOR ELEMENTO : dECLARE UM ARRAY e EXIBA O MAIOR NÚMERO ENTRE ELES.

let array = [1,23,5,10,8]
let maior = 0

array.forEach((item) => {
    if (item > maior) {
        maior = item;
    }
});

console.log(maior);