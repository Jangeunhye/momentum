const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을때 사용. loginInput같이 중요한 정보가 아니라 대문자로...

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText=`Wellcome, ${username}!`;
  toDoForm.classList.remove("hidden");
  toDoList.classList.remove("hidden");
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
  //show form, hide h1
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else{
  paintGreetings(savedUsername);
}