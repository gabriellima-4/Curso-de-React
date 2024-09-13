//Utilizando funções recursivas printe os numeros até 40 sem utilizar estruturas de repetição.

function print40(num) {
    console.log(num)
    if (num < 40){
        num++;
        print40(num);
    }
}

print40(0);