let timer;
let isRunning = false;
let elapsedTime = 0;

function updateDisplay() {
    const display = document.getElementById('display');
    const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedTime % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        elapsedTime++;
        updateDisplay();
    }, 1000);
}

function pauseStopwatch() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
}

updateDisplay();
