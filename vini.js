function calcularMedia() {
    // Captura os três valores do usuário
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

    // Calcula a média e exibe o resultado
    const media = (valor1 + valor2 + valor3) / 3;
    console.log(A média dos três valores é: ${media});
}

// Executa a função
calcularMedia();