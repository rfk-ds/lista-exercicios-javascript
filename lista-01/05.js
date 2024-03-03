// Um motorista deseja abastecer um valor X em reais, de combustível. 
// Escreva um algoritmo para ler o preço do litro do combustível e o valor que o motorista deseja abastecer.
// Em seguida, informe quantos litros foram abastecidos.

let valorAbastecido = parseFloat(prompt("Digite o valor do abastecimento: "));
let precoLitro = parseFloat(prompt("Digite o preço do litro do combustível: "));

let litroAbastecido = valorAbastecido / precoLitro;

alert("Foram abastecidos " + litroAbastecido.toFixed(2) + "L.");