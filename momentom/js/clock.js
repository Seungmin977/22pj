const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2,0); // 문자로 문자열이 2?개가아니라면 옆에 0 붙임
  const Minutes = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
  const Seconds = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();
  clock.innerText = Hours + ":" + Minutes + ":" + Seconds;
}

getClock();
setInterval(getClock, 1000);