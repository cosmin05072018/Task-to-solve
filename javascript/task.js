let submit = document.getElementById("submitBtn"); // submit button
let clear = document.getElementById("clearList"); //clear button
let messageElement = document.getElementById("message"); //message text validation
let paragraphElement = document.getElementById("paragraph");

submit.addEventListener("click", addTask);
paragraphElement.addEventListener("click", handleTaskClick);
clear.addEventListener("click", (e) => {
  paragraphElement.innerHTML = "";
  displayMessage("astazi nu ai nimic");
});

function handleTaskClick(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

displayMessage("astazi nu ai nimic");

function addTask() {
  let describeTask = document.getElementById("describe");
  if (inputValid(describeTask.value)) {
    paragraphElement.innerHTML +=
      '<li class="totul">' + describeTask.value + "</li>";
    describeTask.value = "";
    messageElement.style.visibility = "hidden";
  } else {
    displayMessage("Te rog introdu un mesaj");
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
}
