const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const countdown = document.querySelector('.countdown');
const year = document.querySelector('.year');

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.textContent = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();
  const differenceTime = newYear - currentTime;

  const daysRemaining = Math.floor(differenceTime / 1000 / 60 / 60 / 24);
  const hoursRemaining = Math.floor(differenceTime / 1000 / 60 / 60) % 24;
  const minutesRemaining = Math.floor(differenceTime / 1000 / 60) % 60;
  const secondsRemaining = Math.floor(differenceTime / 1000) % 60;

  days.textContent = daysRemaining;
  hours.textContent = hoursRemaining;
  minutes.textContent =
    minutesRemaining < 10 ? '0' + minutesRemaining : minutesRemaining;
  seconds.textContent =
    secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining;
}

setInterval(() => {
  updateCountdown();
}, 1000);
