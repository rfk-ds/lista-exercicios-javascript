//Crie um algoritmo que calcule o novo valor de um salário a partir de um valor percentual de reajuste. 
// O valor atual do salário e o valor percentual do reajuste devem ser informados pelo usuário como, por exemplo, 7,3%.

let salarioAtual = parseFloat(prompt("Digite o valor atual do salário: "));

let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste:"));

let novoSalario = salarioAtual + (salarioAtual * percentualReajuste);

alert("O novo valor do salário é de: R$ " + novoSalario.toFixed(2));