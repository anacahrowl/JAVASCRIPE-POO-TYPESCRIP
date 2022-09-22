export class Aviao {
    empresa: string;
    categoria: string;
    acento: number;
    tamanho: string;

    constructor(
        empresa: string,
        categoria: string,
        acento: number,
        tamanho: string
    ){
        this.empresa = empresa
        this.categoria = categoria
        this.acento = acento
        this.tamanho = tamanho
    }
}
