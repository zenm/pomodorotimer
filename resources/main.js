// used to get the user's preferred timer

// used to reset the timer
function stopTime() {
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
}

var i = 0;
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
