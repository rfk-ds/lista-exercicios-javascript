// Crie um algoritmo que recebe o valor da altura e do peso de uma pessoa e retorna seu IMC. 
// IMC = peso / altura² 

let peso = parseFloat(prompt("Digite seu peso: "));  
let altura = parseFloat(prompt("Digite sua altura: "));

let imc = peso / altura ** 2;

console.log("O seu IMC é de " + imc.toFixed(1) + ".");

if ( imc >= 18.5 && imc <= 25 ){
  console.log("Pelo IMC, você está dentro do peso recomendado para sua altura.");
} else {
  console.log("Pelo IMC, você está fora do peso recomendado para sua altura.");
}