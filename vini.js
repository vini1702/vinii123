function calcularMedia() {

    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

    
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        console.log("Por favor, insira apenas números válidos.");
        return;
    }

   
    const media = (valor1 + valor2 + valor3) / 3;

 
    console.log(A média dos três valores é: ${media.toFixed(2)});
}


calcularMedia();