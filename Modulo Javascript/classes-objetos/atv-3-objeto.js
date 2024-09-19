/*
MÉTODO DE SOMA DE VALORES : Crie um objeto chamado calculadora com três
propriedades numéricas: a, b, e c. Adicione um método chamado soma que retorne a
soma de a, b, e c.
*/

const calculadora = {
    x: 296,
    y: 50,
    z: 31,
    soma: function(){
        return this.x + this.y + this.z
    }
}

console.log(calculadora.soma());