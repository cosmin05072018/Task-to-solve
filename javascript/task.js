let describeTask = document.getElementById("describe"); //input
let submit = document.getElementById("submitBtn");      // submit button
let clear = document.getElementById("clearList");       //clear button
let paragraph = document.getElementById("paragraph");


submit.addEventListener('click', e=> {
   paragraph.innerHTML+=describeTask.value;
})

clear.addEventListener('click', e => {
    paragraph.innerHTML ="";
})

