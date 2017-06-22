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

function allowNumericKeysBackspace(e){
  if (e.which == 48|| e.keyCode == 48 ||
      e.which == 49|| e.keyCode == 49 ||
      e.which == 50|| e.keyCode == 50 ||
      e.which == 51|| e.keyCode == 51 ||
      e.which == 52|| e.keyCode == 52 ||
      e.which == 53|| e.keyCode == 53 ||
      e.which == 54|| e.keyCode == 54 ||
      e.which == 55|| e.keyCode == 55 ||
      e.which == 56|| e.keyCode == 56 ||
      e.which == 57|| e.keyCode == 57 ||
      e.which == 8 || e.keyCode == 8){
        return true;
      }
    return false;
}
function changeDisplay(e, aboutInput){
  if (allowNumericKeysBackspace(e)){
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
  if (buttonName == "Start"){
  secondTimer = window.setInterval(showCountDown, 1000);
  changeButtonName();
  } else if (buttonName == "Pause"){
    stopTime();
    changeButtonName();
  }
}

function showCountDown() {
  var totalWorkSeconds = getWorkDisplayTime();
  var totalBreakSeconds = getBreakDisplayTime();
  if (totalWorkSeconds > 0){
    totalWorkSeconds--;
    var workMinutes = Math.floor(totalWorkSeconds / 60);
    var workSeconds = totalWorkSeconds % 60 < 10 ? "0"+(totalWorkSeconds % 60).toString() : totalWorkSeconds % 60;
    document.getElementById("display-work-time-minutes").textContent = workMinutes;
    document.getElementById("display-work-time-seconds").textContent = workSeconds;
  } else if (totalBreakSeconds > 0){
    totalBreakSeconds--;
    var breakMinutes = Math.floor(totalBreakSeconds / 60);
    var breakSeconds = totalBreakSeconds % 60 < 10 ? "0"+(totalBreakSeconds % 60).toString() : totalBreakSeconds % 60;
    document.getElementById("display-break-time-minutes").textContent = breakMinutes;
    document.getElementById("display-break-time-seconds").textContent = breakSeconds;
    changeBodyColor("red");
    } else {
      stopTime();
      resetTimeToSettings();

    }
}


function changeButtonName() {
  var buttonName = document.getElementById("start-pause").textContent;
  var el = document.getElementById("start-pause");
  el.textContent = buttonName == "Start"? "Pause" : "Start";
}

function resetTimeToSettings(){
  stopTime();
  var seconds = "00";
  document.getElementById("display-work-time-minutes").textContent = getWorkSettingTime();
  document.getElementById("display-work-time-seconds").textContent = seconds;
  document.getElementById("display-break-time-minutes").textContent = getBreakSettingTime();
  document.getElementById("display-break-time-seconds").textContent = seconds;
  document.getElementById("start-pause").textContent = "Start"
  changeBodyColor("yellow");
}

// used to set the display goal
function getGoalInSettings() {
  return document.getElementById("display-goal-value").value;
}

function setDisplayGoal(goalFromSettings) {
  return document.getElementById("display-goal").textContent = goalFromSettings;
}

// used to limit input to numbers
function limitToNumbers(fieldToCheck) {
  var intergers = /^[0-9]{1,3}$/;
  var field = fieldToCheck.toString();
  return intergers.test(field);
}

var modal = document.getElementById("modal-setting");
var openGear = document.getElementById("open-edit-settings");
var closeModal = document.getElementById("cancel-edit-settings");
// Click on gear, open modal
openGear.onclick = function(){
  modal.style.display = "block";
  stopTime();
  buttonId.textContent = "Start"
  changeBodyColor("yellow");
}

// Click on x, close modal.
closeModal.onclick = function(){
  modal.style.display = "none";
  buttonId.textContent = "Start"
}

// click on modal (but not modal content), close modal
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
      buttonId.textContent = "Start"
  }
}

var buttonId = document.getElementById("start-pause");
buttonId.addEventListener("click", whichBodyColor);

var gearId = document.getElementById("open-edit-settings");
gearId.addEventListener("click",changeBodyColor("yellow"));

function changeBodyColor(color) {
  var bodyStyle = document.body.style;
  var isPause = document.getElementById("start-pause").textContent;
  var backgroundColors = {
    green : "#3399A1",
    red : "#A13B34",
    yellow : "#F1BA55"
  }
  bodyStyle.backgroundColor = backgroundColors[color];
}

function whichBodyColor(){
  if (getWorkDisplayTime() > 0 && buttonId.textContent == "Start"){
    changeBodyColor("green");
  } else if (getWorkDisplayTime() <= 0 &&
      getBreakDisplayTime() > 0 &&
      buttonId.textContent == "Start") {
        changeBodyColor("red");
  } else {
    changeBodyColor("yellow");
  }
}
