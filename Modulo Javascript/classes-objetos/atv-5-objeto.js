/*
classe conta bancária : Crie uma classe chamada ContaBancaria com as
propriedades titular e saldo. Adicione métodos chamados depositar e sacar, onde o
método depositar adiciona um valor ao saldo e o método sacar subtrai um valor do
saldo (desde que haja saldo suficiente). Crie um objeto da classe e faça algumas
operações de depósito e saque.
*/

function contaBancaria (titular, saldo) {
    this.titular = titular,
    this.saldo = saldo,

    this.depositar = function(quantia){
        this.saldo += quantia;
        console.log(`Depósito de R$${quantia} feito. Novo saldo: R$ ${this.saldo}`);    
    },

    this.sacar = function(quantia){
        if(this.saldo <= 0 || quantia > this.saldo) {
            console.log("Não se pode sacar dessa conta.");
            return
        }

        this.saldo -= quantia;
        console.log(`Saque efetuado de R$${quantia}. Novo saldo: R$ ${this.saldo}`);
    }
}

let novaConta = new contaBancaria("Vrínio", 5000);
novaConta.sacar(4350);
novaConta.sacar(1000);