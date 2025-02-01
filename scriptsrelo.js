let timerInterval;
let timeLeft = 0;
let blindLevels = [];
let currentLevel = 0;

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);

function startTimer() {
  const blindTimeInput = document.getElementById('blind-time');
  const blindLevelsInput = document.getElementById('blind-levels');
  const prizeInfoInput = document.getElementById('prize-info');

  // Configurar o tempo dos blinds
  const blindTime = parseInt(blindTimeInput.value) * 60; // Converter para segundos
  if (isNaN(blindTime) || blindTime <= 0) {
    alert('Por favor, insira um tempo válido para os blinds.');
    return;
  }

  // Configurar os níveis de blinds
  blindLevels = blindLevelsInput.value.split(',').map(level => level.trim());
  if (blindLevels.length === 0 || blindLevels.some(level => level === '')) {
    alert('Por favor, insira pelo menos um nível de blind válido.');
    return;
  }

  // Exibir informações de prêmio
  const prizeInfo = prizeInfoInput.value.trim();
  document.getElementById('prize-display').textContent = prizeInfo || 'Sem informações adicionais';
  
  // Inicializar o relógio
  timeLeft = blindTime;
  currentLevel = 0;
  updateBlindDisplay();
  startCountdown();
}

function startCountdown() {
  clearInterval(timerInterval); // Limpar intervalo anterior, se houver 
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextBlind();
      return;
    }
    timeLeft--;
    updateTimerDisplay();
  }, 1000);
}

function nextBlind() {
  currentLevel++;
  if (currentLevel >= blindLevels.length) {
    alert('Todos os níveis de blind foram concluídos!');
    resetTimer();
    return;
  }
  timeLeft = parseInt(document.getElementById('blind-time').value) * 60;
  updateBlindDisplay();
  startCountdown();
}

function updateBlindDisplay() {
  const currentBlind = blindLevels[currentLevel];
  document.getElementById('current-blind').textContent = `Blinds: ${currentBlind}`;
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 0;
  currentLevel = 0;
  blindLevels = [];
  document.getElementById('timer').textContent = '00:00';
  document.getElementById('current-blind').textContent = 'Blinds: --/--';
  document.getElementById('prize-display').textContent = '';
}