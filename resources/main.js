// used to get the user's preferred timer

var totalTime;
var timeInMinutes;
// used to start the timer
function startTime(userTime) {
  timeInSeconds = userTime * 1000;
  totalTime = window.setTimeout(doesSomething, timeInSeconds);
}

function doesSomething() {
  console.log("Time done");
  stopTime();
};

// used to reset the timer
function stopTime() {
  window.clearTimeout(totalTime);
  window.clearInterval(secondTimer);
}

// used to disable the start timer button
// need to disable start timer so that you can't trigger multiple timers

// used to show the time that's remaining on the page
var secondTimer;
function showCountdown(userTime) {
  //user time is in minutes
  var convertToTotalSeconds = userTime * 60; //minutes * seconds;
  totalSec = convertToTotalSeconds;
  secondTimer = window.setInterval(doesSomething2, 1000);
  startTime(convertToTotalSeconds);
}

var i = 0;
var totalSec = 0;
function doesSomething2() {
  console.log(totalSec);
  totalSec--;
}

// used to
