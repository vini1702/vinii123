function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Digite o valor do lado do quadrado:"));
    
    // Validação do valor
    if (isNaN(lado) || lado <= 0) {
        console.log("Por favor, insira um número válido maior que zero.");
        return;
    }

    // Cálculo da área
    const area = lado * lado;
    
    // Exibir o resultado no console
    console.log(A área do quadrado é: ${area.toFixed(2)});
}

// Chame a função diretamente no console
calcularAreaQuadrado();