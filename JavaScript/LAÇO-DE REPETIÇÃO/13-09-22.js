/* 1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.*/
                                      /*PARA*/
let s, f, ft = 0, st= 0, ms = 0, mc = 0.0

for(i = 1; i <= 20; i++){
    s=prompt("Digite o seu rendimento: ")
    f=prompt("Digite quantidade de filhos: ")
    st = st + s
    ft = ft + f
    if(s > ms){
        ms = s
    }
    if(s <= 100){
        mc++
    }
}
alert("O maior salário é: " + ms)
alert("A média de filhos é: " + ft/20)
alert("A média do salário é: " + st/20)
alert("Percentual de pessoas com salário até R$ 100: " + (mc/20)*100 + "%");


/*2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no conjunto dos números de 1 até 500.*/

let n = 1, soma

alert (n)
for (n = 1; n <= 500; n++){
if (n%2 != 0 && n%3 == 0) {
    alert (n)
}
}

                        /* ENQUANTO*/
/*1- Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.*/

let numero = 0, n2 = 0, n3 = 0, m

while (numero >= 0) {
    numero = prompt ("Digite um número: ")

    n2 = parseInt(n2) + parseInt(n)
    n3 = parseInt(n3) + parseInt(1)
}
if (numero < 0) {
    n2 = n2 - numero
    n3 = n3 - 1
    numero = n2/n3
    alert (n2 + "\n" + m + "\n" + n3);

}
               
/*2- Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por
três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário
digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135.*/
let nu

nu = prompt("Digite um número: ")

while (nu < 100) {
    alert(nu)
    nu = nu * 3
}
if (nu > 100) {
    alert (nu);
}
              /*FAÇA ENQUANTO*/
/*1- Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.*/
let num = 233

do {
    alert (num)

if (num < 300 || num> 400) {
    num = parseInt(num) + parseInt(3)
} else {
    num = num + 5
}
} while (num != 456);

/*2- Faça um programa que pegue um número do teclado e calcule a soma de todos os
números de 1 até ele. Ex.: o usuário entra 7, o programa vai mostrar 28, pois
1+2+3+4+5+6+7=28.*/
let nume, n4 = 1, n5 = 0, som

nume = prompt("Digite um número: ")

do {

alert (n4)
n5 = parseInt(n5) + parseInt(n4)
n2 = n2 + 1

if (nume == n4){
som= parseInt(n4) + parseInt(nume)
alert (som)
}
}while (n4 < nume);
