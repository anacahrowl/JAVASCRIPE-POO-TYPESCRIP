export class Funcionario {
    nome: string;
    cargo: string;
    turno: string;
    empresa: string;

    constructor (
        nome: string,
        cargo: string,
        turno: string,
        empresa: string
    ) {
        this.nome = nome
        this.cargo = cargo
        this.turno = turno
        this.empresa = empresa
    }
    verFuncionario () {
        console.log (`Funcionário: ${this.nome}.`)
    }
    verEmpresa () {
        console.log (`Empresa: ${this.empresa}.`)
    }
    verCargo () {
        console.log (`Cargo: ${this.cargo}.`)
    }
    verTurno () {
        console.log (`Turno: ${this.turno}`)
    }
}
