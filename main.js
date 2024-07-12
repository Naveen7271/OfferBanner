document.addEventListener("DOMContentLoaded", function () {
  function checkWidth() {
    const offerIcon = document.getElementById("offer-icon");
    if (window.innerWidth <= 600) {
      offerIcon.src =
        "https://img.icons8.com/?size=100&id=QVgeOFh3ZOQQ&format=png&color=000000";
    } else {
      offerIcon.src =
        "https://img.icons8.com/?size=100&id=110169&format=png&color=000000";
    }
  }

  function startTimer(duration, display) {
    let timer = duration,
      hours,
      minutes,
      seconds;
    setInterval(function () {
      hours = parseInt(timer / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.addEventListener("resize", checkWidth);
  checkWidth();

  const countdownTime = 5400; // 1 hour 30 minutes in seconds
  const display = document.querySelector("#timer");
  startTimer(countdownTime, display);
});
