function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Digite o valor do lado do quadrado:"));
    
    
    if (isNaN(lado) || lado <= 0) {
        console.log("Por favor, insira um número válido maior que zero.");
        return;
    }

    
    const area = lado * lado;
    
    
    console.log(A área do quadrado é: ${area.toFixed(2)});
}


calcularAreaQuadrado();