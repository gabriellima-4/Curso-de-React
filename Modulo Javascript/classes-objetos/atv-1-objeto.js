//OBJETO PESSOA : CRIE UM OBJETO PESSOA COM aS SEGUINTES PROPRIEDADES: NOME, IDADE
//E PROFISSÃO. ALÉM DISSO, CRIE UM MÉTODO CHAMADO APRESENTAR QUE RETORNE UMA
//FRASE COM O NOME E PROFISSÃO DA PESSOA (EX: SOU FULANO E SOU ARQUITETO)

const pessoa = {
    nome: "Junin",
    idade: 40,
    profissao: "Pedreiro de Software",
    apresentar: function() {
        return (`O meu nome é ${this.nome} e eu sou ${this.profissao}.`);
    }
}

console.log(pessoa.apresentar())