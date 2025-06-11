let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let clearBtn = document.querySelector("#clear");

let hoursDiv = document.querySelector("#hours");
let minutesDiv = document.querySelector("#minutes");
let secondsDiv = document.querySelector("#seconds");

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let isRunning = false;

let formatTime = (unit) => (unit < 10 ? "0" + unit : unit);

let updateDOM = () => {
  hoursDiv.innerHTML = formatTime(hours);
  minutesDiv.innerHTML = formatTime(minutes);
  secondsDiv.innerHTML = formatTime(seconds);
};

let startTimer = () => {
  if (isRunning) return;
  isRunning = true;

  interval = setInterval(() => {
    seconds += 1;

    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }

    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }

    updateDOM();
  }, 1000);
};

let stopTimer = () => {
  clearInterval(interval);
  isRunning = false;
};

let clearTimer = () => {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDOM();
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
clearBtn.addEventListener("click", clearTimer);
