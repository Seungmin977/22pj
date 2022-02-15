const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d"); // 그릴 수 있게 설정
const colors = document.querySelectorAll(".controls__color");
const rangeWidth = document.querySelector(".controls__range input");
const mode = document.querySelector("#jsMode");
const saveBtn = document.querySelector("#jsSave");
const ClearBtn = document.querySelector("#jsClear");
const ErazerMode = document.querySelector("#ErazerMode");

// pixel modifier ? 
// canvas css에 했던것처럼 canvas 자체에도 ? 크기 정해줘야함 그래야 그려짐
canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 700); // 사각형 크기 x, y, 가로 , 세로 크기
ctx.strokeStyle = "#2c2c2c"; // 그리는 선들의 색상
ctx.fillStyle = "#2c2c2c"; // 박스 색 fill, Paint
ctx.lineWidth = 2.5; // 선 크기

let painting = false;
let filling = false; // fill 버튼 클릭 관련 변수
let Erazering = false;

function stopPainting() {
  painting = false;
  // console.log(painting);
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  // console.log(x,y);

  if(!painting) { // 클릭하고 움직이면 실행 painting값이 true이면
    // 마우스가 움직이는 곳에 계속 path 를 만듬
    // path = 선 (시작하는거임) beginPath로 선을 만들면 moveto로 값설정?
    ctx.beginPath(); // path 만듬 (선) 단 만든게 보이지 않음 stroke? 로 그려줘야함
    ctx.moveTo(x, y); // x,y 값 설정
  } else {
    // 만든 쪽으로 선을 채움
    ctx.lineTo(x, y) // 마지막점을 특정 좌표와 직선으로 연결
    ctx.stroke(); //path 만든 선을 채움
  }
}

function startPainting() {
  painting = true;
}

function changeColor(event) {
  const targetColor = event.target.style.backgroundColor;
  ctx.strokeStyle = targetColor; // 그리는 색
  ctx.fillStyle = targetColor; // 전체 채우는 색은 선택한 배경색이랑 같게
  handleErazerModeClick();
}

function changeWidth(event) {
  ctx.lineWidth = event.target.value;
  // ctx.fillStyle = lineWidth;
}

function handleModeClick(event) { // filling 배경색 제어하기위함
  if(filling === true) {
    filling = false;
    mode.innerText = "Fill"
  } else {
    filling = true;
    mode.innerText = "Paint"
  }
}

function handleCanavasClick() { // 배경색 채울때 
  if(filling) {
    ctx.fillRect(0, 0, 700, 700); // 사각형 크기 x, y, 가로 , 세로 크기
  }
}

function handleCM(event) {
  event.preventDefault(); // 오른쪽 클릭 방지
}

function handleSaveClick() {
  // 아래 toDataURL 기본값은 png
  const image = canvas.toDataURL(); // 저장하는 type parameter 에 의해 지정된 포맷의 이미지 표현을 포함한 data URL 을 반환함
  const link = document.createElement("a"); // 저장할 링크 만듬
  link.href = image; // a링크 주소에 이미지 주소 넣음
  link.download = "PaintJS[😊]"; // 다운로드는 해당 이름을 저장 + 확장자 (이모지 윈도우키 + .) 
  link.click(); // 클릭해서 다운로드!
}

function handleClearClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 700, 700); // 사각형 크기 x, y, 가로 , 세로 크기
}

function handleErazerModeClick() {
  if(Erazering === true) {
    Erazering = false;
    ErazerMode.innerText = "ing..";
    ctx.strokeStyle = "#fff"; // 그리는 선들의 색상
  } else {
    Erazering = true;
    ErazerMode.innerText = "Erazer";
  }
}

if(canvas) {
  // mousemove canvas안에서 움직임 감지
  canvas.addEventListener("mousemove", onMouseMove);
 // mousemove 클릭 감지
  canvas.addEventListener("mousedown", startPainting);
  // mousemove 클릭을 중지하면 감지
  canvas.addEventListener("mouseup", stopPainting);
  // mousemove canvas에서 떠나면 감지
  canvas.addEventListener("mouseleave", stopPainting);
  // 배경 클릭하면
  canvas.addEventListener("click", handleCanavasClick);
  // 컨텍스트 메뉴 ( 마우스 오른쪽 눌르면 나오는 메뉴 이미지 저장 등 )
  canvas.addEventListener("contextmenu", handleCM);
}

// getContext 는 cavas 안에 내용을 그릴 수 있는 값임 픽셀을 다룸 ( 2d, 3d, 등으로 받을 수 있음 )
// lineWidth 는 크기 조절하는 것


// Array.from(); object로 부터 array를 만듬
// console.log(colors);
// console.log(Array.from(colors));

// array form 으로 array를 foreach로 color값 가질 수 있음
Array.from(colors).forEach(color => color.addEventListener("click", changeColor));

if(rangeWidth) { //값이 있따면
  rangeWidth.addEventListener("input", changeWidth);
}

if(mode) {
  mode.addEventListener("click", handleModeClick)
}

if(saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

if(ClearBtn) {
  ClearBtn.addEventListener("click", handleClearClick)
}

if(ErazerMode) {
  ErazerMode.addEventListener("click", handleErazerModeClick);
}