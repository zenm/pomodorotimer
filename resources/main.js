// used to get the user's preferred time
function getWorkTime() {
  return document.getElementById("work-setting").value;
}

function getBreakTime(){
  return  document.getElementById("break-setting").value;
}

// used to set the time on the page
function displayTime(time){
  var el = document.getElementById("display-time");
  el.childNodes[1].textContent = time;
}

// used to stop the timer
function stopTime() {
  window.clearInterval(secondTimer);
}


//used to decrement or increment the input value
function changeWorkTime(buttonData) {
  console.log(buttonData);
  var currentWorkTime = parseFloat(getWorkTime());
  var currentBreakTime = parseFloat(getBreakTime());

  if (buttonData == ""){
  } else if (buttonData == ""){
  } else if (buttonData == ""){
  } else if (buttonData == ""){
  }
  setWorkTimeValue(currentWorkTime);
}

function setWorkTimeValue(time) {
  var el = document.getElementById("work-setting");
  el.value = time;
}

function setBreakTimeValue(time) {
  var el =  document.getElementById("break-setting");
  el.value = time;
}



// used to disable the start timer button -- need to disable start timer so that you can't trigger multiple timers

// used to show the time that's remaining on the page
var secondTimer;
function showCountdown(userTime) {
  //user time is in minutes
  var convertToTotalSeconds = userTime * 60; //minutes * seconds;
  totalSec = convertToTotalSeconds;
  secondTimer = window.setInterval(doesSomething2, 1000);
}


var totalSec = 0;
function doesSomething2() {
  var minutes = Math.floor(totalSec / 60);
  var seconds = totalSec % 60 < 10 ? "0"+(totalSec % 60).toString() : totalSec % 60;
  console.log(minutes + " : " + seconds);
  totalSec--;

  if (totalSec < 0){
    stopTime();
  }
}

// used to
