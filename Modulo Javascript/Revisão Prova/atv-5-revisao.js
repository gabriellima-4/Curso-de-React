/*
Crie um objeto chamado Pessoa com os campos "nome", "idade" e "endereço". O
campo "endereço" deve ser um outro objeto com os campos "rua", "número",
"cidade" e "estado". Escreva uma função que receba uma Pessoa como parâmetro e
imprima seu endereço completo.
*/

const Endereco = {
    rua: "Rua Quezal",
    numero: 3,
    cidade: "Kazad",
    estado: "Ukaralhiw",
    ondeEuMoro: function(pessoa){
        console.log(pessoa.endereco.rua, pessoa.endereco.numero, pessoa.endereco.cidade, pessoa.endereco.estado);
        
    }
}

const Pessoa = {
    nome : "Julyélsson",
    idade: 34,
    endereco: Endereco
}

Pessoa.endereco.ondeEuMoro(Pessoa)