import { Pessoa } from "./src/models/pessoa";


let pessoa1 = new Pessoa();
pessoa1.nome ="Carolina";
pessoa1.idade = 21;
pessoa1.cpf = "123.456.789-10";
pessoa1.telefone = "(21) 979650204";



console.log(`O seu nome é: ${pessoa1.nome}` );
console.log(`Sua idade é: ${pessoa1.idade}`);
console.log(`Seu cpf é: ${pessoa1.cpf}`);
console.log(`Seu telefone é: ${pessoa1.telefone}`);
