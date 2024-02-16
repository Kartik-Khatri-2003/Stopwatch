const buttons = document.querySelectorAll("button");
const pauseButton = document.querySelector("#pause");
const playButton = document.querySelector("#play");
const restartButton = document.querySelector("#restart");
const displayTime = document.querySelector("#display");

let timer = null;
//This indicates that no interval timer is active when the page loads,
//as the stopwatch hasn't started yet.

let [seconds, minutes, hours] = [0,0,0];

function stopwatch(){
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h+":"+m+":"+s;                       
}

function watchStart() {
    //Before starting a new timer, any existing timer (if present) is cleared using clearInterval(timer).
    //This ensures that only one timer is running at a time
    if (timer!= null) {
        clearInterval(timer);
    }
    // Start the stopwatch timer
    timer = setInterval(stopwatch,1000);
    playButton.disabled = true;
    playButton.classList.add("stylebtn");
    pauseButton.classList.remove("stylebtn");
}

function watchStop(){
    clearInterval(timer);
    playButton.disabled = false;
    playButton.classList.remove("stylebtn");
    pauseButton.classList.add("stylebtn");
            
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
    playButton.disabled = false;
    pauseButton.disabled = false;
    buttons.forEach(button => {
        button.classList.remove("stylebtn");
    })
            
}

/* buttons.classList.remove("stylebtn"); */
/* The above code is incorrect cause 'buttons' is a nodelist. */
/* We need to iterate over each button of the NodeList using forEach() method. */

/* New Topics : */

/* setInterval-------
   The setInterval function is used to repeatedly execute a specified function
   or piece of code at a fixed time interval.
   syntax: setINterval(function, interval);
   1. function: The function to be executed at each interval.
   2. interval: The time interval, in milliseconds, at which the function should be executed
   For example: setInterval(stopwatch, 1000) would execute the stopwatch function every 1000 milliseconds (1 second).
*/

/* clearInterval-------
   The clearInterval function is used to stop the repeated execution of code that was previously set up with setInterval.
   syntax: clearInterval(intervalID); 
   1. intervalID: The ID value returned by the setInterval function when it was originally called.
   fFor example: clearInterval(timer); here the intervalID is 'timer'.
*/








