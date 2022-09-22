import {ContaBancaria} from './models/contaBancaria'

const conta1 = new ContaBancaria() 
let saldoAtual: number = conta1.consultar()

console.log(`Saldo atual: ${saldoAtual} `); 
conta1.depositar(50)

saldoAtual= conta1.consultar()
console.log(`Saldo atuaç: ${saldoAtual}`);

conta1.depositar(120)
console.log(`Saldo atual: ${saldoAtual}`)

conta1.sacar(100)
saldoAtual= conta1.consultar()
console.log(`Saldo atuaç: ${saldoAtual}`);

