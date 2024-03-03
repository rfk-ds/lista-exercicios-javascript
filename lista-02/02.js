//  Crie um algoritmo que leia um número e mostre se o mesmo é par ou ímpar.

let numero = parseInt(prompt("Digite o número: "));

if (numero % 2 == 0) {
    alert("O número "+ numero+ " é par!");
} else {
    alert("O número " + numero + " é ímpar!");
}