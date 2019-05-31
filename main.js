var timer = document.querySelector(".timer");
var start = document.querySelector(".start");

var milliseconds;
var seconds;
var minutes;
var hours;

var running = 0;
var tInterval;
var startTime;
var currentTime;

function startTimer() {

    if(!running){
        startTime = new Date().getTime();
        tInterval = setInterval(get, 1);

    }
    if(running){
        startTime = new Date().getTime() - distance;
        tInterval = setInterval(get, 1);
    }
}

function get() {
    currentTime = new Date().getTime();

    distance =  currentTime - startTime;


    hours = Math.floor(distance /(3600000));
    minutes = Math.floor((distance % (3600000)) / (60000));
    seconds = Math.floor((distance % (60000)) / 1000);
    milliseconds = Math.floor((distance % 1000)/ 10);   

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

}

function stopTimer(){
    clearInterval(tInterval);
    running = 1;
}

function resetTimer(){
    clearInterval(tInterval);
    running = 0;
    timer.innerHTML = "00:00:00:00";
}