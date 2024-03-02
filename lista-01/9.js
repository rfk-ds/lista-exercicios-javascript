// Crie um algoritmo que calcule a área de um quadrado, sendo que o comprimento do lado é informado pelo usuário. 
// A área do quadrado é calculada elevando-se o lado ao quadrado.

let comprimentoLado = parseFloat(prompt("Digite o comprimento do lado do quadrado"));

let areaQuadrado = comprimentoLado ** 2;

alert("A área do quadrado é de " + areaQuadrado.toFixed(2) + "cm.");