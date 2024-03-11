// Crie um algoritmo que calcule a soma dos números de 1 a 100 (sem usar o método de Gauss, conhecido como “fórmula da Soma da PA”🐴)7
// (Gabarito: Dá 5050, pelo método de Gauss)

function somaNum1a100 () {
    let soma = 0;
    let i = 1;
    while (i <= 100) {
        soma += i;
        i++;
    }

    console.log("A soma dos números de 1 a 100 é:", soma);
}

somaNum1a100()