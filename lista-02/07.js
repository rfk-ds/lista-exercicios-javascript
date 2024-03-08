// Crie um algoritmo que calcule e mostre o novo valor de um salário a partir das seguintes regras: 
// salários de até R$ 1.000,00 inclusive recebem 30% de aumento; 
// salários de até R$ 2.000,00 inclusive recebem 25%;
// salários de até R$ 3.000,00 inclusive recebem 20%;
// salários de até R$ 4.000,00 inclusive recebem 15% 
// e salários acima de R$ 4.000,00 recebem 10%.

let salarioAtual = 2500;
let novoSalario;

if (salarioAtual <= 1000) {
    novoSalario = salarioAtual * 1.3;
} else if (salarioAtual <= 2000) {
    novoSalario = salarioAtual * 1.25;
} else if (salarioAtual <= 3000) {
    novoSalario = salarioAtual * 1.2;
} else if (salarioAtual <= 4000) {
    novoSalario = salarioAtual * 1.15;
} else {
    novoSalario = salarioAtual * 1.1;
}

console.log("Salário atual: R$" + salarioAtual.toFixed(2));
console.log("Novo salário: R$" + novoSalario.toFixed(2));