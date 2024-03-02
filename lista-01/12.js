// Crie um algoritmo que calcule a área de uma esfera, sendo que o comprimento do raio é informado pelo usuário. 
// A área da esfera é calculada multiplicando-se 4 vezes pi e o raio ao quadrado.

let comprimentoRaio = parseFloat(prompt("Informe o comprimento do raio da esfera: "));
const PI = 3.14;

let areaEsfera = 4 * PI * Math.pow(comprimentoRaio, 2);

alert("A área da esfera é de " + areaEsfera.toFixed(2) + "cm²");