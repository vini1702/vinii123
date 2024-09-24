function calcularMedia() {

    const valor1 = +prompt("Digite o primeiro valor:");
    const valor2 = +prompt("Digite o segundo valor:");
    const valor3 = +prompt("Digite o terceiro valor:");


    return (valor1 + valor2 + valor3) / 3;
}


const media = calcularMedia();
console.log(A média dos três valores é: ${media});