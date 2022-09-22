import { Animal } from "./animal";

export class Cavalo extends Animal {
    porte: string;
    sexo: string;

constructor (
    porte: string,
    sexo: string,
    raca: string,
    cor: string,
    especie: string,
    idade: number,
    familia: string,
    nome: string,

) {
    super(idade, nome)
    this.porte = porte
    this.sexo = sexo
    
}
verCorrer(): void {
    console.log ("~correndo igual um cavalo~")
}
onomatopeia(): void {
    console.log (`~som do cavalo~`)
}
}