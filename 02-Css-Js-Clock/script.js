const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const month = document.getElementById("month");
const day = document.getElementById("day");
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];

function setTime() {
  let date = new Date();
  day.innerHTML = date.getDate();
  month.innerHTML = MONTHS[date.getMonth()];

  let seconds = date.getSeconds();
  let secondAngle = (seconds / 60) * 360 + 90;

  if (secondAngle == 90) {
    sec.classList.add("noTransition");
    setTimeout(() => {
      sec.classList.remove("noTransition");
    }, 200);
  }
  sec.style.transform = `rotate(${secondAngle}deg)`;

  let minute = date.getMinutes();
  let minuteAngle = (minute / 60) * 360 + 90;

  if (minuteAngle == 90) {
    min.classList.add("noTransition");
    setTimeout(() => {
      min.classList.remove("noTransition");
    }, 200);
  }
  min.style.transform = `rotate(${minuteAngle}deg)`;

  let hours = date.getHours();
  let hourAngle = (hours / 12) * 360 + 90;

  if (hourAngle == 90) {
    hour.classList.add("noTransition");
    setTimeout(() => {
      hour.classList.remove("noTransition");
    }, 200);
  }
  hour.style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(setTime, 1000);
