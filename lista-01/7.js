// Crie um algoritmo que calcule a gorjeta a ser paga de uma conta de restaurante. 
// A gorjeta é calculada como sendo 10% do valor da conta, que deve ser informado pelo usuário.

let valorConta = parseFloat(prompt("Digite o valor da conta: "));

let gorjeta = 0.1 * valorConta;

alert("A gorjeta a ser paga é de: R$ " + gorjeta.toFixed(2));