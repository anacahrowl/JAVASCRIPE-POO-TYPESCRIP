let numero, porcentagem, resultado;


numero = prompt("Informe um número para calcular a porcentagem: ");
porcentagem = prompt("Informe o valor da porcentagem: ");

function percent(n, p){

    resultado = parseInt(n) * (parseInt(p)/100)

    return (p + "%" + " de " + n + " é: " + resultado)
}
alert(percent(numero, porcentagem));

/*2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit*/
let celsius, fahrenheit;

celsius = prompt("Informe a temperatura em Celsius, que se trasnformará em Fahrenheit : ");

function tempo(c){

    fahrenheit = parseFloat(c) * parseFloat(1.8) + parseInt(32)

    return fahrenheit
}
alert(tempo(celsius));


/*3 -  Criar uma função que converta uma 
temperatura de Fahrenheit para Celsius*/

let cel, fahr;

fahr = prompt("Informe uma temperatura em Fahrenheit, que se transformará em Celsius: ");

function temperatura(f){

        cel = parseInt(fahr - 32) / (1.8)

    return (cel)
}
alert(temperatura(fahr));

/*4 - Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.*/
let peso, altura, imc;

peso = prompt("Informe seu peso: ");
altura = prompt("Informe sua altura: ");

function imc(p, a){

    i = (p) / (a**2)


if(imc < 18.5){
    alert("Seu IMC é: " + imc + "\nVocê está classificado como na faixa de peso");
}


    return imc



}
alert(imc(peso, altura));


/*1 - Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.*/
let n1, n2, n3, maior, menor;

n1 = prompt("Informe um número: ");
n2 = prompt("Informe outro um número: ");
n3 = prompt("Informe outro um número: ");

function maiornumero(x1,x2,x3){

    if(n1 > n2 & n1 > n3){
        maior = n1
    }else if(n2 > n1 & n2 > n3){
        maior = n2
    }else if(n3 > n1 & n3 > n2){
        maior = n3
    }

    return ("O maior número é : " + maior)
}
alert(maiornumero(n1,n2,n3))

function menornumero(y1, y2, y3){

    if (n1 < n2 & n1 < n3){
        menor = n1
    }else if (n2 < n1 & n2 < n2){
        menor = n2
    }else {
        menor = n3
    }
        return ("O menor número é: " + menor)
}
alert(menornumero(n1,n2,n3));


/*2 - Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.*/
let taxaImposto, custo, vendaFinal

custo = prompt ("Digite o custo do produto: ")
taxaImposto = prompt ("Digite o imposto sobre a venda em porcentagem: ")

function somalImposto (custo, taxaImposto) {
    vendaFinal = parseFloat(custo) + parseFloat((taxaImposto/100) * custo)
    return alert (vendaFinal)
}
somalImposto (custo, taxaImposto);

/*3 - Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.*/
let horas, minutos;

horas= prompt("Informe as horas: ");
minutos= prompt("Informe os minutos: ");

function hora(h1, h2){
    
    if(horas >= 12){

        horas = horas - 12

        return("São: " + horas + ":" + minutos + " P.M")

    }else {

         horas = horas
         return("São: " + horas + ":" + minutos + " A.M");
    }
}
alert(hora(horas, minutos));

/*4 - Criar uma função para calcular a porcentagem de um número*/



let num1, num2, result

num1 = prompt("Digite um número: ")
num2 = prompt("Digite a porcentagem que deseja de " + num1 + ":");

function x (num1, num2) {
    result = num2/100 * num1
    return alert(result);
}

x(num1, num2);

/*5 -  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.*/
let nume1, nume2, soma, sub, multi, div

nume1 = prompt ("Digite um número: ")
nume2 = prompt ("Digite um número: ")

function x (nume1, nume2) {
    soma = parseFloat(nume1) + parseFloat(nume2)
    sub = nume1 - nume2
    multi = nume1 * nume2
    div = nume1/nume2

    return alert ("A soma de " + nume1 + " com " + nume2 + " dá " + soma + "." +
                 "\nA subtração de " + nume1 + " com " + nume2 + " dá " + sub + "." +
                 "\nA multiplicação de " + nume1 + " com " + nume2 + " dá " + multi + "." +
                 "\nA divisão de " + nume1 + " com " + nume2 + " dá " + div + ".");
}
x (nume1, nume2);


/* 6 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.*/
let mes

mes = prompt("Digite o mês, em números: ")

function x (mes) {
    switch (mes) {
        case "1", "01":
        return alert ("Janeiro");
        break;
        case "2", "02":
        return alert ("Fevereiro");
        break;
        case "3", "03":
        return alert ("Março");
        break;
        case "4", "04":
        return alert ("Abril");
        break;
        case "5", "05":
        return alert ("Maior");
        break;
        case "6", "06":
        return alert ("Junho");
        break;
        case "7", "07":
        return alert ("Julho");
        break;
        case "8", "08":
        return alert ("Agosto");
        break;
        case "9", "09":
        return alert ("Setembro");
        break;
        case "10":
        return alert ("Outubro");
        break;
        case "11":
        return alert ("Novembro");
        break;
        case "12":
        return alert ("Dezembro");
        break;
    }}
    x (mes);
    
