// Crie um algoritmo que recebe um valor de temperatura em Celsius e o converte para Fahrenheit. 
// F = (C * 9/5)+32

let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius que deseja converter: "))
let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
alert("Em Fahrenheit, a temperatura digitada é de " + temperaturaFahrenheit + "°F.");