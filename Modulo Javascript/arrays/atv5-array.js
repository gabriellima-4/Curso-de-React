//números pares: declare um array e exiba somente os números pares.

let array = [3,5,8,9,10,14,17,21,22,25,42,44,81,98];

array.forEach((item) => {
    if (item % 2 == 0) {
        console.log(item);
    }
});