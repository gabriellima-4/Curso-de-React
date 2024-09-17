/*
A escola PBBM precisa de um sistema simples para calcular a média das notas de seus alunos. Cada aluno
possui 4 notas, variando de 0 a 10, e o programa precisa calcular a média dessas notas e informar o
resultado.

Requisitos:

1. O programa deve receber 4 notas (entre 0 e 10) como entrada.
2. Calcular a média aritmética dessas notas.
3. Exibir a média para o usuário.
*/

let notas = [8.8,4,9.5,7];
let soma = 0

notas.forEach((nota) => {
    soma += nota;
});

let media = soma/4;
console.log(media);
