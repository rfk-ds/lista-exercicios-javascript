// Crie um algoritmo que leia três números e mostre-os em ordem crescente.

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let numero3 = Number(prompt("Digite o terceiro número:"));


if (numero1 <= numero2 && numero1 <= numero3) {
    if (numero2 <= numero3) {
        console.log(numero1, numero2, numero3);
    } else {
        console.log(numero1, numero3, numero2);
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
    if (numero1 <= numero3) {
        console.log(numero2, numero1, numero3);
    } else {
        console.log(numero2, numero3, numero1);
    }
} else {
    if (numero1 <= numero2) {
        console.log(numero3, numero1, numero2);
    } else {
        console.log(numero3, numero2, numero1);
    }
}