// Crie um algoritmo que calcule o volume de uma caixa d’água cilíndrica, sendo que os comprimentos do raio e a altura são informados pelo usuário. 
// O volume é calculado multiplicando-se pi, o raio ao quadrado e a altura.

let comprimentoRaio = parseFloat(prompt("Informe o comprimento do raio da caixa d'água: "));
let altura = parseFloat(prompt("Informe a altura da caixa d'água: "));
const PI = 3.14;

let volumeCaixaDagua = PI * Math.pow(comprimentoRaio, 2) * altura;

alert("O volume da caixa d'água cilíndrica é de " + volumeCaixaDagua.toFixed(2) + "cm³");