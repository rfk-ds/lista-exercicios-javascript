let numero = Number(prompt("Digite um número: "));

if (numero > 0) {
    alert("O número " + numero + " é positivo");
} else if (numero < 0) {
    alert("O número " + numero + " é negativo");
} else if (numero == 0) {
    alert("O número " + numero + " não é positivo nem negativo");
} else {
    alert("Você não digitou um número, tente novamente.")
}