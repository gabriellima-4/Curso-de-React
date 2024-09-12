//Crie uma função chamada CONVERTERTEMPERATURA, que converte uma temperatura entre Celsius e Fahrenheit.
// A função deve receber dois argumentos: a temperatura e a unidade de origem (C ou F) e deve retornar a temperatura convertida.

function CONVERTERTEMPERATURA(temp, escala) {
    if (escala == "C") {
        temp = temp * (9/5) + 32;
        console.log(temp)
    } else if (escala == "F") {
        temp = temp * (5/9) - 32;
        console.log(temp)
    }
}

CONVERTERTEMPERATURA(32, "C")
CONVERTERTEMPERATURA(100, "F")