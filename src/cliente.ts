export class Cliente {
    nome: string;
    cpf: string;
    id: number;

    constructor(
        nome: string,
        cpf: string,
        id: number
    ){
        this.nome=nome
        this.cpf=cpf
        this.id=id
    }
    

    verCliente(){
        console.log(`Cliente ${this.nome} \nid ${this.id} \ncpf ${this.cpf}`);
    }
}