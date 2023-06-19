const timerDisplay = document.querySelector('.timer');
const playPauseBtn = document.querySelector('.playpause');
const resetBtn = document.querySelector('.reset');
const skipBtn = document.querySelector('.skip');
const breakText = document.querySelector('.break-text');
const circle = document.querySelector('.circle');

let intervalId;
let isRunning = false;
let isBreak = false;
let minutes = 25;
let seconds = 0;

function setInitialSessionColors() {
  if (isBreak) {
    circle.style.backgroundColor = '#6D82CD';
    timerDisplay.style.color = 'white';
  } else {
    circle.style.backgroundColor = 'white';
    timerDisplay.style.color = '#6D82CD';
  }
}

function startTimer() {
  if (isRunning) return;

  intervalId = setInterval(updateTimer, 1000);
  isRunning = true;
  playPauseBtn.textContent = 'PAUSE';
  setInitialSessionColors();
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(intervalId);
      isRunning = false;
      if (isBreak) {
        isBreak = false;
        minutes = 25;
        playPauseBtn.textContent = 'START';
        breakText.style.display = 'none';
      } else {
        isBreak = true;
        minutes = 5;
        playPauseBtn.textContent = 'PLAY';
        breakText.style.display = 'block';
      }
      seconds = 0;
      displayTime();
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  displayTime();
}

function displayTime() {
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

function resetTimer() {
    clearInterval(intervalId);
    isRunning = false;
    isBreak = false;
    minutes = 25;
    seconds = 0;
    displayTime();
    playPauseBtn.textContent = 'START';
    breakText.style.display = 'none';
    document.querySelector('.circle').style.backgroundColor = 'white';
    timerDisplay.style.color = '#6D82CD';
}

function skipTimer() {
    if (isBreak) {
      isBreak = false;
      minutes = 25;
      if (!isRunning) {
        playPauseBtn.textContent = 'START';
      }
      breakText.style.display = 'none';
      document.querySelector('.circle').style.backgroundColor = 'white';
      timerDisplay.style.color = '#6D82CD';
    } else {
      isBreak = true;
      minutes = 5;
      if (!isRunning) {
        playPauseBtn.textContent = 'PLAY';
      }
      breakText.style.display = 'block';
      document.querySelector('.circle').style.backgroundColor = '#6D82CD';
      timerDisplay.style.color = 'white';
    }
    seconds = 0;
    displayTime();
}

playPauseBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    playPauseBtn.textContent = 'PLAY';
  } else {
    startTimer();
  }
});

resetBtn.addEventListener('click', resetTimer);

skipBtn.addEventListener('click', skipTimer);

breakText.style.display = 'none';
setInitialSessionColors();

