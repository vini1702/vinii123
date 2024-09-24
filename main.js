<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcule a área do quadrado</title>
</head>
<body>
    <h2>Calcular a área do quadrado</h2>
    <label for="lado">Informe o valor do lado do quadrado:</label>
    <input type="number" id="lado" min="0" step="0.01"
    placeholder="Digite o valor do lado">
        <button
    onclick="calcularArea()">Calcular</button>    
   
<p id="resultado"></p>

<script>
    function calcularArea() {
        const lado = document.getElementById("lado").value;
        if (isNaN*lado) || lado <= 0)}
        document.getElementById("resultado") .{
        innerText + "Por favor, insira um número válido maior que zero";
               return;
            }

            const area = lado * lado;

    document.getElementById("resultado") . 
    innerText = 'A área do quadrado é: ${area}';
        }
    

</script>
</body>
</html>