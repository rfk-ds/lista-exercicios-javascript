// Crie um algoritmo que leia um caractere e informe se o mesmo é uma vogal ou não.

let caractere = prompt("Digite um caractere: ").toLowerCase();

if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
    console.log("É uma vogal.");
} else {
    console.log("Não é uma vogal.");
}