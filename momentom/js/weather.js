const API_KEY = "4954aee3bf440e891efc8bca2fb0705c";

function onGeoOk(position) { // 성공 시 position 값 받음
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon)

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  // 자바스크립트로 url 주소 부름 promise 임 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤 일어남 그래서 then을 써줘야함? 기다려야해서
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    // console.log(data.name, data.weather[0].main);
  }); // 내용 추출
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

// 위치 좌표를 줌 wifi gps 등등 값으로 성공했을때 문제생겼을때
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


// https://home.openweathermap.org/api_keys 이 사이트에서 얻은 api랑 아래 사용법으로 경도, 위도 값 넣고 api 값 넣으면 알아서 위치나 날씨 알려줌

// https://api.openweathermap.org/data/2.5/weather?lat=37.5340495&lon=127.2071591&appid=4954aee3bf440e891efc8bca2fb0705c