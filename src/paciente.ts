export class Paciente {
    paciente: string;
    diagnostico: string;
    altura: string;
    peso: string;

constructor (
    paciente: string,
    diagnostico: string,
    altura: string,
    peso: string,
    ){
        this.paciente = paciente;
        this.diagnostico = diagnostico;
        this.altura = altura;
        this.peso = peso;
    }
verPaciente () {
    console.log (`Paciente: ${this.paciente}.`)
}
verDiagnostico () {
    console.log (`Diagnóstico: ${this.diagnostico}.`)
}
verAltura () {
    console.log (`Altura: ${this.altura}.`)
}
verPeso () {
    console.log (`Peso: ${this.peso}.`)
}
}