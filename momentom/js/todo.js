const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos"; // 반복되는 단어 저장
let toDos = []; // 리스트 저장할 배열 바뀔 수 있도록  빈 값으로 시작되기 때문에 let으로 해줘야함

function saveToDos() { // 로컬스토레지에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열로 저장하기위해 json 써줌 문자열
  // localStorage.setItem("toDos", toDos); // 배열로 저장하기위해 json 써줌
}

function deleteItem(event) { // 리스트 입력한거 중에서 삭제
  const targetItem = event.target.parentElement; // 선택한 삭제아이템 부모 li 찾기
  targetItem.remove();// 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(targetItem.id)); // todos 배열에 저장된 것 중 filter로 todos배열값에 id 중 선택한 targetId를 제외한 것들을 true로 반환하여 toDos에 새로 저장
  saveToDos(); // 새로 저장한 todos 를 저장
  // console.dir(event.target); // dir 하면 파일내용에서 parentnode등 찾을수있음
}

function paintToDo(newTodo) { // 리스트 입력한거 그려주기
  const item = document.createElement("li");
  item.id = newTodo.id; // li에 아이디 생김
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  span.innerText = newTodo.text; // li에 텍스트
  deleteBtn.innerText = "X";
  item.appendChild(span);
  item.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteItem);
  toDoList.appendChild(item);
}

function handleToDoSubmit(event) { // 리스트 입력 후 엔터 
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = { //저장된거 지우기위해 id값 줄려고 obj 만듬
    text: newTodo,
    id: Date.now(), // 랜덤한 아이디 주기
  }
  toDos.push(newTodoObj); // 입력한거 그리기 전 TODO LIST에 저장, id값도 주려고 newtodoobj
  paintToDo(newTodoObj); //그려주기
  saveToDos(); // 저장하기
}

toDoForm.addEventListener("submit", handleToDoSubmit); //from에 enter 누르면 submit 작업

const savedToDos = localStorage.getItem(TODOS_KEY);  //저장한 로컬스토레지 가져오기

if(savedToDos !== null) { //로컬스토레지에 savedToDos가 존재한다면
  const parsedToDos = JSON.parse(savedToDos); // 텍스트인 값 변환 array로 
  toDos = parsedToDos; // todos 저장된거를 넣어줌
  parsedToDos.forEach(paintToDo); // 갯수만큼 실행 배열 paintToDo 함수를 실행 parsedToDos에서 받아온걸로 하나씩 넣기
}