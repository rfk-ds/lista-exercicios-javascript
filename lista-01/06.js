// Crie um algoritmo para calcular a média de duas notas digitadas pelo usuário, sendo que a segunda nota tem peso dois.

nota1 = parseFloat(prompt("Digite a primeira nota: "));
nota2 = parseFloat(prompt("Digite a segunda nota: "));

peso = 2;

mediaPonderada = (nota1 + (nota2 * peso)) / (1 + peso);

alert("A média ponderada é de: " + mediaPonderada.toFixed(1));