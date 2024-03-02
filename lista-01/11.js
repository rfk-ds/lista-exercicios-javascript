// Crie um algoritmo que calcule a área de um círculo, sendo que o comprimento do raio é informado pelo usuário. 
// A área do círculo é calculada multiplicando-se pi e o raio ao quadrado.

let comprimentoRaio = parseFloat(prompt("Informe o comprimento do raio: "));

const PI = 3.14;

let areaCirculo = comprimentoRaio ** 2 * PI;

alert("A área do círculo é de " + areaCirculo.toFixed(2) + "cm².");