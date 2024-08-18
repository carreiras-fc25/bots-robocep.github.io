<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Acertos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            transition: background-color 0.5s;
        }
        .container {
            max-width: 400px;
            margin: 40px auto;
            padding: 30px; /* aumentei o padding para 30px */
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .label {
            display: block;
            margin-bottom: 20px; /* aumentei o espaçamento entre as labels */
            text-align: left;
            margin-left: 40px; /* aumentei o espaçamento à esquerda */
        }
        .input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
        }
        .button {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #3e8e41;
        }
        .result {
            font-size: 24px;
            font-weight: bold;
            margin-top: 20px;
        }
        .dark-mode {
            background-color: #333;
            color: #fff;
        }
        .dark-mode .container {
            border-color: #666;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        .dark-mode .button {
            background-color: #666;
            color: #fff;
        }
        .dark-mode .label {
            color: #fff;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        .mode-button {
            margin-left: 20px;
        }
        .button-container {
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Bots Robocep</h1>
        <button class="mode-button" id="mode-button">Modo Claro</button>
    </div>
    <div class="container">
        <form>
            <label class="label" for="tentativas">Tentativas:</label>
            <input class="input" type="number" id="tentativas" required>
            <br><br> <!-- adicionei um espaço entre as labels -->
            <label class="label" for="acertos">Acertos:</label>
            <input class="input" type="number" id="acertos" required>
            <div class="button-container">
                <button class="button" id="calcular">Calcular</button>
            </div>
        </form>
        <div class="result" id="result">
            <p id="acertos-resultado"></p>
            <p id="erros-resultado"></p>
        </div>
    </div>

    <script>
        const modeButton = document.getElementById('mode-button');
        const body = document.body;

        modeButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            modeButton.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
        });

        const calcularButton = document.getElementById('calcular');
        const acertosResultadoElement = document.getElementById('acertos-resultado');
        const errosResultadoElement = document.getElementById('erros-resultado');

        calcularButton.addEventListener('click', (e) => {
            e.preventDefault();
            const tentativas = parseInt(document.getElementById('tentativas').value);
            const acertos = parseInt(document.getElementById('acertos').value);
            const erros = tentativas - acertos;
            const acertosPorcentagem = (acertos / tentativas) * 100;
            const errosPorcentagem = (erros / tentativas) * 100;
            acertosResultadoElement.textContent = `Acertos: ${acertosPorcentagem.toFixed(2)}%`;
            errosResultadoElement.textContent = `Erros: ${errosPorcentagem.toFixed(2)}%`;
        });
    </script>
</body>
</html
