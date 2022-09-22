import { Animal } from "./animal";
export class Cachorro extends Animal {
    raca: string;
    cor: string;

constructor (
    raca: string,
    cor: string,
    especie: string,
    idade: number,
    familia: string,
    nome: string,
    porte: string,
    sexo: string
) {
    super(idade, nome)
    this.raca = raca
    this.cor = cor
}
verCorrer(): void {
    console.log ("~correndo igual um cachorro~")
}
onomatopeia (): void {
    console.log (`Auauau`)
}
}
