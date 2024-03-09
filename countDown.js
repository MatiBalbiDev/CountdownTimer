let targetDate = null;
let interval;

function getTargetDate() {
  document.getElementById("timer").style.display = "none";
  document.getElementById("countdown").style.display = "flex";
  const form = document.getElementById("form-datetime");
  const dateTimeInput = document.getElementById("hora-evento");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dateTimeValue = dateTimeInput.value;
    targetDate = new Date(dateTimeValue);
    startCountdown();
  });
}

function startCountdown() {
  clearInterval(interval);
  const currentDate = new Date();
  let difference = targetDate - currentDate;
  if (difference > 0) {
    document.getElementById("timer").style.display = "none";
    interval = setInterval(() => {
      difference -= 1000;
      countDown(difference);
    }, 1000);
  }
}

function countDown(difference) {
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown__days").innerText =
    days < 10 ? "0" + days : days;
  document.getElementById("countdown__hours").innerText =
    hours < 10 ? "0" + hours : hours;
  document.getElementById("countdown__minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("countdown__seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  if (difference <= 0) {
    document.getElementById("countdown__days").innerText = "00";
    document.getElementById("countdown__hours").innerText = "00";
    document.getElementById("countdown__minutes").innerText = "00";
    document.getElementById("countdown__seconds").innerText = "00";
    document.getElementById("timer").style.display = "block";
    document.getElementById("countdown").style.display = "none";
  }
}

getTargetDate();
