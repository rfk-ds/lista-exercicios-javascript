// Crie um algoritmo que leia dois números e mostre o maior número.

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (num1 > num2) {
    alert("O número " + num1 + " é maior que o número " + num2 + ".");
} else if (num2 > num1) {
    alert("O numero " + num2 + " é maior que o número " + num1 + ".");
} else {
    alert("Os números " + num1 + " e o número " + num2 + " são iguais.");
}