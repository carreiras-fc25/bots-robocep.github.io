// Calculadora
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operacaoSelect = document.getElementById('operacao');
const calcularButton = document.getElementById('calcular');
const resultadoP = document.getElementById('resultado');

calcularButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operacao = operacaoSelect.value;

    let resultado;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Erro!';
    }

    resultadoP.textContent = `Resultado: ${resultado}`;
});

// Histórico
const historicoLista = document.getElementById('historico-lista');

// Armazenamento de Arquivos
const arquivoInput = document.getElementById('arquivo');
const uploadButton = document.getElementById('upload');
const arquivosLista = document.getElementById('arquivos-lista');

uploadButton.addEventListener('click', () => {
    const arquivo = arquivoInput.files[0];
    const formData = new FormData();
    formData.append('arquivo', arquivo);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then
