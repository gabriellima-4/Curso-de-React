//OCORRÊNCIA : DECLARE UM ARRay e um valor e exiba quantas vezes esse valor aparece no array.

let array = [1,3,5,5,1,7,11,12,1,2,6,1,3,1,5,9,11,3,3];
let ocorrencia = 0;
let valorescolhido = 3;

array.forEach((item) => {
    if (item === valorescolhido){
        ocorrencia++;
    }
});

console.log(ocorrencia);
