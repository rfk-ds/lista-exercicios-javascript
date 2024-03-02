let d = parseFloat(prompt("Qual a distância do robô até a cesta?"))

if (d <= 800 && d >= 0) {
    alert(1);
} else if (d > 800 && d <= 1400) {
    alert(2);
} else if (d > 1400 && d <= 2000) {
    alert(3);
} else {
    alert("Entrada inválida.");
}