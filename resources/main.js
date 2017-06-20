// used to get the user's preferred setting time
function getWorkSettingTime() {
  return document.getElementById("work-setting-value").value;
}

function getBreakSettingTime(){
  return  document.getElementById("break-setting-value").value;
}

// used to set the time on the page
function displayWorkTime(time) {
  var elWorkTime = document.getElementById("display-work-time-minutes");
  elWorkTime.textContent = time;
}

function displayBreakTime(time) {
  var elBreakDisplay = document.getElementById("display-break-time-minutes");
  elBreakDisplay.textContent = time;
}


//used to decrement or increment the input value
function changeSettingTime(buttonData) {
  var currentWorkTime = parseFloat(getWorkSettingTime());
  var currentBreakTime = parseFloat(getBreakSettingTime());
  if (buttonData == "work-setting-plus"){
    currentWorkTime++;
    setWorkTimeValue(currentWorkTime);
  } else if (buttonData == "work-setting-minus"){
    currentWorkTime--;
    setWorkTimeValue(currentWorkTime);
  } else if (buttonData == "break-setting-plus"){
    currentBreakTime++;
    setBreakTimeValue(currentBreakTime);
  } else if (buttonData == "break-setting-minus"){
    currentBreakTime--;
    setBreakTimeValue(currentBreakTime);
  }
}

function changeDisplay(e, aboutInput){
  if (e.which == 13 || e.keyCode == 13){
    if (aboutInput == "work-setting-value"){
      displayWorkTime(getWorkSettingTime());
    } else if (aboutInput == "break-setting-value"){
      displayBreakTime(getBreakSettingTime());
    }
  }
}

//used to change the values of work and break settings
function setWorkTimeValue(time) {
  var el = document.getElementById("work-setting-value");
  el.value = time;
  displayWorkTime(time);
}

function setBreakTimeValue(time) {
  var el =  document.getElementById("break-setting-value");
  el.value = time;
  displayBreakTime(time);
}

// used to stop the timer
function stopTime() {
  window.clearInterval(secondTimer);
}

// get the time from what's displayed
function getWorkDisplayTime(){
  var minutes = parseFloat(document.getElementById("display-work-time-minutes").textContent);
  var seconds = parseFloat(document.getElementById("display-work-time-seconds").textContent);
  var totalWorkSeconds = (minutes * 60) + seconds;
  return totalWorkSeconds;
}

function getBreakDisplayTime(){
  var minutes = parseFloat(document.getElementById("display-break-time-minutes").textContent);
  var seconds = parseFloat(document.getElementById("display-break-time-seconds").textContent);
  var totalBreakSeconds = (minutes * 60) + seconds;
  return totalBreakSeconds ;
}

// used to show the time that's remaining on the page
var secondTimer;
function startCountdown() {
  var buttonName = document.getElementById("start-pause").textContent;
  if (buttonName =="Start"){
  totalSec = getWorkDisplayTime(); // ternary for total seconds to test if work or break is zero?
  secondTimer = window.setInterval(showCountDown, 1000);
  changeButtonName();
} else if (buttonName == "Pause"){
  stopTime();
  changeButtonName();
}

}

function changeButtonName() {
  var buttonName = document.getElementById("start-pause").textContent;
  var el = document.getElementById("start-pause");
  el.textContent = buttonName == "Start"? "Pause" : "Start";
}

var totalSec = 0;
function showCountDown() {
  console.log(totalSec);
  var minutes = Math.floor(totalSec / 60);
  var seconds = totalSec % 60 < 10 ? "0"+(totalSec % 60).toString() : totalSec % 60;
  document.getElementById("display-work-time-minutes").textContent = minutes;
  document.getElementById("display-work-time-seconds").textContent = seconds;
  totalSec--;
  if (totalSec < 0){
    stopTime();
  }
}

function resetTimeToSettings(){
  stopTime();
  var seconds = "00";
  document.getElementById("display-work-time-minutes").textContent = getWorkSettingTime();
  document.getElementById("display-work-time-seconds").textContent = seconds;
  document.getElementById("display-break-time-minutes").textContent = getBreakSettingTime();
  document.getElementById("display-break-time-seconds").textContent = seconds;
   document.getElementById("start-pause").textContent = "Start"
}
// used to disable the start timer button -- need to disable start timer so that you can't trigger multiple timers
