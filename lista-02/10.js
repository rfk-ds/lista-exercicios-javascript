//  Crie um algoritmo que valide uma data, formada por dia, mês e ano. Por exemplo, a data 30/02 é sempre inválida; mas a data 29/02/2012 é válida.

function validarData(dia, mes, ano) {
    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    const diasPorMes = [31, (ehBissexto ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes < 1 || mes > 12 || dia < 1 || dia > diasPorMes[mes - 1]) {
        console.log(`${dia}/${mes}/${ano} é uma data inválida.`);
    } else {
        console.log(`${dia}/${mes}/${ano} é uma data válida.`);
    }
}