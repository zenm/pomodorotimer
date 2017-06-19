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
  secondTimer = window.setInterval(doesSomething2, 1000);

  startTime(userTime)

}

var i = 0;
function doesSomething2() {
  i++;
  console.log(i);
}

// used to
