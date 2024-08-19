// Calculadora de Porcentagem
const calculadoraForm = document.getElementById('calculadora-form');
const tentativasInput = document.getElementById('tentativas');
const acertosInput = document.getElementById('acertos');
const resultadoP = document.getElementById('resultado');

calculadoraForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tentativas = parseInt(tentativasInput.value);
  const acertos = parseInt(acertosInput.value);
  const porcentagem = (acertos / tentativas) * 100;
  resultadoP.textContent = `Porcentagem: ${porcentagem.toFixed(2)}%`;
});

// Chat GPT
const chatInput = document.getElementById('chat-input');
const chatSendButton = document.getElementById('chat-send');
const chatLog = document.getElementById('chat-log');

chatSendButton.addEventListener('click', () => {
  const userInput = chatInput.value.trim();
  if (userInput !== '') {
    // Aqui você pode implementar a lógica para enviar a mensagem para o GPT e receber a resposta
    // Por exemplo, você pode usar a API do GPT-3
