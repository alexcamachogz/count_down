let prevValues = { days: -1, hours: -1, minutes: -1, seconds: -1 };

function updateDisplay(element, value, prevValue) {
  if (value !== prevValue) {
    const topHalf = element.querySelector(".countdown-timer__item-number-top");
    const bottomHalf = element.querySelector(
      ".countdown-timer__item-number-bottom"
    );
    const newValue = value.toString().padStart(2, "0");

    topHalf.textContent = newValue;
    bottomHalf.textContent = newValue;

    element.classList.add("flipping");
    setTimeout(() => {
      element.classList.remove("flipping");
    }, 300);
  }
}

function countdown() {
  const now = new Date();
  const target = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 14
  );
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  updateDisplay(document.getElementById("days"), days, prevValues.days);
  updateDisplay(document.getElementById("hours"), hours, prevValues.hours);
  updateDisplay(
    document.getElementById("minutes"),
    minutes,
    prevValues.minutes
  );
  updateDisplay(
    document.getElementById("seconds"),
    seconds,
    prevValues.seconds
  );

  prevValues = { days, hours, minutes, seconds };
}

setInterval(countdown, 1000);
countdown(); // Initial call
