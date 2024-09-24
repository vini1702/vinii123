function calcularMedia() {
    let valor1 = +prompt("Digite o primeiro valor:");
    let valor2 = +prompt("Digite o segundo valor:");
    let valor3 = +prompt("Digite o terceiro valor:");

 
    let media = (valor1 + valor2 + valor3) / 3;

 
    return media;
}


let resultado = calcularMedia();

document.write('A média dos tres valores é:');