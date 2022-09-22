import { Animal } from "./animal";

export class Preguica extends Animal{
    familia: string;
    especie: string;

constructor (
    familia: string,
    especie: string,
    porte: string,
    sexo: string,
    raca: string,
    cor: string,
    idade: number,
    nome: string
) {
    super (idade, nome)
    this.familia = familia
    this.especie = especie
}
verCorrer(): void {
    console.log (`Corre igual preguiça~`)
}
verSom(): void {
    console.log (`Som de preguiça`)
}
verTrabalho() {
    console.log (`Trabalha que nem uma preguiça`)
}
}