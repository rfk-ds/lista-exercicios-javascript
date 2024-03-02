// Crie um algoritmo que calcule a área de um retângulo, sendo que os comprimentos da altura e da base são informados pelo usuário.
// A área do retângulo é calculada multiplicando-se a altura pela base.

let altura = parseFloat(prompt("Informe a altura: "));
let base = parseFloat(prompt("Informe a base: "));

areaRetangulo = altura * base

alert("A área do retângulo é de " + areaRetangulo.toFixed(2) + "cm.");