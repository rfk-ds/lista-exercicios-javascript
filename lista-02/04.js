// Crie um algoritmo que leia três números e mostre o maior número.

let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let n3 = Number(prompt("Digite o terceiro número: "))

let maiorNumero;

if (n1 >= n2 && n1 >= n3) {
    maiorNumero = n1;
} else if (n2 >= n1 && n2 >= n3) {
    maiorNumero = n2;
} else {
    maiorNumero = n3;
}

alert("O maior número é " + maiorNumero);