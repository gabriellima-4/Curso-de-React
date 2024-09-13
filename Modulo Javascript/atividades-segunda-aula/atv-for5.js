//Sequência de Fibonacci: Gere os primeiros 15 números da sequência de Fibonacci.

let num = 1;

for (num; num <= 15; num++){
    let fibo = (1/Math.sqrt(5)) * ((1 + Math.sqrt(5)/2)**num - (1- Math.sqrt(5)/2)**num);
    console.log(fibo);
}

// rapaz... acho que não tá muito certo não...