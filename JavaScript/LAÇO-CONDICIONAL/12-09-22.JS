/*1) João, homem de bem, comprou um microcomputador para controlar o rendimento diário
de seu trabalho. Toda vez que ele traz um peso de tomate maior que o estabelecido pelo
regulamento do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo
excedente. João precisa que você faça um sistema que leia a variável P (peso de tomates) e
verifique se há excesso. Se houver, gravar na variável E (Excesso) e na variável M o valor
da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo
ZERO.*/

let peso, excedente

peso = prompt ("Digite quantos quilos de tomate você tem: ")

if (peso > 50) {
    excedente = peso - 50
    peso = peso - 50
    peso = peso*4
    alert ("Seu excedente é de " + e + " quilos." + "\nO total a se pagar por causa do excedente é de " + peso+ " reais.")
} else {
    alert ("Você não possui peso excedente.");
}

/*2) Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.*/
let s, nu, e

nu = prompt ("Digite o seu número de horas trabalhadas: ")

s = 10*nu

if (nu > 50) {
    e = 20*(nu - 50)
    s = 500
    s = parseFloat(s) + parseFloat(e)
    alert ("Seu salário total é de " + s + " reais, juntamente com seu excedente de " + e + " reais.")
} else {
    alert ("Você não possui excedentes. \nSeu salário é de " + s + " reais.");

}


/*3) Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for &gt;= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados.*/

let n1, n2, n3, n4, q1, q2, q3, q4

n1 = prompt("Digite um número: ")
n2 = prompt("Digite um número: ")
n3 = prompt("Digite um número: ")
n4 = prompt("Digite um número: ")

q1 = n1*n1
q2 = n2*n2
q3 = n3*n3
q4 = n4*n4

if (q3 >= 1000) {
    alert ("O resultado do quadrado de " + n3 + " é igual " + q3 + ".")
} else {
    alert ("O resultado do quadrado de " + n1 + " é " + q1 + "." +
             "\nO resultado do quadrado de " + n2 + " é " + q2 + "." +
             "\nO resultado do quadrado de " + n3 + " é " + q3 + "." +
             "\nO resultado do quadrado de " + n4 + " é " + q4 + ".");

}


/* 4) Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
número é par ou ímpar, e se é positivo ou negativo.*/

let numero

numero = prompt ("Digite um número: ")

if (numero%2 == 0 && numero >= 0) {
    alert ("O número é par e positivo")
}
else if (numero%2 != 0 && numero >= 0) {
    alert ("O número é ímpar e positivo")
}
else if (numero%2 != 0 && numero < 0) {
    alert ("O número é ímpar e negativo")
}
else if (numero%2 == 0 && numero < 0) {
    alert ("O número é par e negativo");

}

/*5) A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.*/
let i

i = prompt("Digite o índice de poluição: ")

if (i == 0.3 && i <= 0.39) { 
    alert ("Devido ao índice informado, todas as industrias do grupo 1 deverão suspender suas atividades.")
}
if (i == 0.4 && i <= 0.49) {
    alert ("Devido ao índice informado, todas as industrias do grupo 1 e 2 deverão suspender suas atividades.")
}
if (i >= 0.5) {
    alert ("Devido ao índice informado, todas as industrias deverão suspender suas atividades.")
}

/*6) Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes
categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos*/

let id

id = prompt ("Digite a sua idade: ")

if (id >= 5 && id <= 7) {
    alert ("Parabéns! Você foi alocado na categoria A.")
}
if (id >= 8 && id <= 11) {
    alert ("Parabéns! Você foi alocado na categoria B.")
}
if (id >= 12 && id <= 13) {
    alert ("Parabéns! Você foi alocado na categoria C.")
}
if (id >= 14 && id <= 17) {
    alert ("Parabéns! Você foi alocado na categoria D.")
} 
if (id >= 18) {
    alert ("Parabéns! Você foi alocado na categoria para adultos.")
}
if (id <= 4) {
    alert ("Desculpe! Você não possui idade o suficiente para ser alocado em uma de nossas categorias. :(")
}

/*7) Receber valores de base e altura de um triângulo e verificar se são valores válidos
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.*/

let b, a, t

b = prompt ("Digite um valor para a base do triângulo: ")
a = prompt ("Digite um valor para a altura do triângulo: ")

if (b > 0 && a > 0) {
    t = (b*a)/2
    alert ("A área do triângulo é de " + t + ".")
} else {
    alert ("Não podemos fazer a operação com esses números.");

}
/*8) Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma
for maior que 100, caso contrário imprimi-la com o valor zero.*/
let n

n = prompt ("Escreva uma valor: ")

if (n > 100) {
    alert (n + ".")
} else {
    alert ("0.");
}