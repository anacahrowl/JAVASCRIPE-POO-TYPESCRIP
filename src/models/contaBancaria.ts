 export class ContaBancaria{

    saldo: number;

    constructor() {
        this.saldo = 0;
    }
    
    consultar(): number {
        return this.saldo;
    }

    depositar(valor:number): void{
        if (valor >=0) {
    this.saldo += valor
}
    }

    sacar(valor: number): void {
        if(valor>= 0 && this.saldo>= valor) {
    this.saldo -= valor

        }
    }

}
