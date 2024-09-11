let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎，" + myName+"来到FATE";
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎，" + storedName+"来到FATE";
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  