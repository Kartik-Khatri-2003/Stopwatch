const buttons = document.querySelectorAll("button");
const pauseButton = document.querySelector("#pause");
const playButton = document.querySelector("#play");
const restartButton = document.querySelector("#restart");
const displayTime = document.querySelector("#display");
let timer = null;

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

function watchStart(){
    if (timer!= null) {
        clearInterval(timer);
    }
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
