let submit = document.getElementById("submitBtn"); // submit button
let clear = document.getElementById("clearList"); //clear button
let messageElement = document.getElementById("message"); //message text validation
let paragraphElement = document.getElementById("paragraph");

submit.addEventListener("click", addTask);
paragraphElement.addEventListener("click", handleTaskClick);
clear.addEventListener("click", (e) => {
  paragraphElement.innerHTML = "";
  displayMessage("There are no task!");
});

function handleTaskClick(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

displayMessage("There are no task!");

function addTask() {
  let describeTask = document.getElementById("describe");
  if (inputValid(describeTask.value)) {
    paragraphElement.innerHTML +=
      '<li class="itemGroupList">' + describeTask.value + "</li>";
    describeTask.value = "";
    messageElement.style.visibility = "hidden";
  } else {
    displayMessage("Please write a text!");
  }
}

function inputValid(input) {
  if (input) {
    return true;
  } else {
    return false;
  }
}

function displayMessage(message) {
  messageElement.innerHTML = message;
  messageElement.style.visibility = "visible";
  messageElement.style.marginTop = "20px";  
}
