const quote = "The quick brown fox jumps over the lazy dog";
const input = document.getElementById("input");
const startButton = document.getElementById("start");
startButton.addEventListener("click", start);
input.addEventListener("input", checkInput);
input.disabled = true;

function start() {
  startButton.disabled = true;
  displayQuote();
  startTimer();
}

function displayQuote() {
  document.getElementById("quote").innerText = quote;
  input.value = "";
}

let stopClock = false;
let time;

function startTimer() {
  stopClock = false;
  time = -3;

  let interval = setInterval(() => {
    if (stopClock === true) {
      clearInterval(interval);
      return;
    }
    if (time === 0) {
      unlockInput();
    }
    document.getElementById("timer").innerText = time++;
  }, 1000);
}

function stopTimer() {
  stopClock = true;
  input.value = "";
}

function unlockInput() {
  input.disabled = false;
}

function checkInput() {
  if (input.value === quote) {
    stopTimer();
    input.disabled = true;
    startButton.disabled = false;
    printResult();
  }
}

function printResult() {
  let result = document.getElementById("result");
  let res = quote.split(" ").length / (time / 60) ;
  result.innerText = "result: " + res + " wpm";
}