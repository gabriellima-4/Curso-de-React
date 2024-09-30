//verificar se é primo: crie um programa que verifique se um número é primo e printe true ou false.
// to tomando uma surra nesse pfv me ajuda ai

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