// Crie um algoritmo que leia uma sequência de n números inteiros e mostre a soma, média, o maior número e o menor número da sequência.

function calcularEstatisticasNumeros(sequencia) {
    let soma = 0;
    let media = 0;
    let maior = sequencia[0];
    let menor = sequencia[0];

    for (let i = 0; i < sequencia.length; i++) {
        soma += sequencia[i];
        if (sequencia[i] > maior) {
            maior = sequencia[i];
        }
        if (sequencia[i] < menor) {
            menor = sequencia[i];
        }
    }

    media = soma / sequencia.length;

    return {
        soma: soma,
        media: media,
        maior: maior,
        menor: menor
    }
}

let input = prompt("Digite uma sequência de números separados por vírgula: ");
let numeros = input.split(',').map(Number);

let estatisticas = calcularEstatisticasNumeros(numeros);

console.log(`Soma: ${estatisticas.soma}`);
console.log(`Média: ${estatisticas.media}`);
console.log(`Maior número: ${estatisticas.maior}`);
console.log(`Menor número: ${estatisticas.menor}`);