export class ContaBancaria {
    saldo: number;
    nome: string;
    conta: string;
    agencia: number;

constructor (
    saldo: number,
    nome: string,
    conta: string,
    agencia: number
    ){
        this.saldo = saldo;
        this.nome = nome;
        this.conta = conta;
        this.agencia = agencia;
    }
verSaldo () {
    console.log (`Saldo: ${this.saldo}.`)
}
verNome () {
    console.log (`Nome: ${this.nome}.`)
}
verConta () {
    console.log (`Conta: ${this.conta}.`)
}
verAgencia () {
    console.log (`Agência: ${this.agencia}.`)
}
}