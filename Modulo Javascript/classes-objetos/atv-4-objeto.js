/*
classe retângulo : Crie uma classe chamada Retangulo que tenha as
propriedades largura e altura. Adicione um método chamado calcularArea que
retorna a área do retângulo (largura * altura). Crie um objeto da classe e exiba a
área.
*/

function retangulo (altura, largura) {
    this.altura = altura,
    this.largura = largura,
    this.calcularArea = function(){
        return this.altura * this.largura;
    }
};

let exemplo = new retangulo(5,8)
console.log(exemplo.calcularArea());
