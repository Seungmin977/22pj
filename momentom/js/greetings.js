const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// const toDoForm = document.querySelector("#todo-form");
const textName = document.querySelector("h1");
const HIDDEN_TEXT = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const name = loginForm.querySelector("input").value;
  localStorage.setItem(USERNAME_KEY, name); // 값 저장 username 이름에 name 저장
  loginForm.classList.add(HIDDEN_TEXT);
  paintGreetings(name);
};

function paintGreetings(username) {
  textName.innerText = "Hello " + username;
  textName.classList.remove(HIDDEN_TEXT);
};

const savedUsername = localStorage.getItem(USERNAME_KEY); //savedUsername 에 저장값 저장

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_TEXT);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  // toDoForm.classList.remove(HIDDEN_TEXT);
  paintGreetings(savedUsername);
}

// localStorage.setItem("1, 2") 값 저장 
// localStorage.getItem("1") 값 불러오기 
// localStorage.removeItem("1") 값 삭제 

