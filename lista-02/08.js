// Os endereços IP versão 4 são divididos em cinco classes: A, B, C, D e E. 
// Os endereços no intervalo de 0 a 127 são classe A, de 128 a 191 são classe B, de 192 a 223 são classe C, de 224 a 239 são classe D e a partir de 240 são classe E. 
// Crie um algoritmo que leia o primeiro octeto, no formato decimal, de um endereço IP e informe a sua classe.

function determinarClasseIP(primeiroOcteto) {
    primeiroOcteto = parseInt(primeiroOcteto);
    
    if (primeiroOcteto >= 0 && primeiroOcteto <= 127) {
        return "Classe A";
    } else if (primeiroOcteto >= 128 && primeiroOcteto <= 191) {
        return "Classe B";
    } else if (primeiroOcteto >= 192 && primeiroOcteto <= 223) {
        return "Classe C";
    } else if (primeiroOcteto >= 224 && primeiroOcteto <= 239) {
        return "Classe D";
    } else if (primeiroOcteto >= 240) {
        return "Classe E";
    } else {
        return "Endereço IP inválido";
    }
}

let primeiroOcteto = prompt("Digite o primeiro octeto do endereço IP:");
console.log("A classe do endereço IP é:", determinarClasseIP(primeiroOcteto));