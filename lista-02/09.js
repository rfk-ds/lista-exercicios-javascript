// Crie um algoritmo que receba um número inteiro, que representa um determinado mês do ano, e mostre o nome do mês correspondente.
// Por exemplo, se for informado o número 2, algoritmo deverá exibir fevereiro. 
// O algoritmo deve validar se a entrada está correta.

function validarData () {
    let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let numeroMes = parseInt(prompt("Digite o número do mês (1 a 12):"));

    if (numeroMes >= 1 && numeroMes <= 12) {
        let indiceMes = numeroMes - 1;
        alert("O mês correspondente é: " + mes[indiceMes]);
    } else {
        alert("Número do mês inválido. Por favor, digite um número entre 1 e 12.");
    }
}

validarData()