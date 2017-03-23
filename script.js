let min = 25;
let sec = 0;
let paused = false;
let counter = null;
let breakLength = 5;

function start() {
    console.log(sec);
    if (min === 0 && sec === 0 || (min < 0)) {
        document.querySelector(".sec").innerHTML = "00";
        document.querySelector(".min").innerHTML = "00";
        clearInterval(counter);
        min = breakLength;
        startBreak();
    } else {
        secs(),
        mins();
       
    }

}


function pause(){
    
    if (!paused){
        document.querySelector(".pause").innerHTML = "Tauko";
        counter = setInterval(start, 1000); 
    } else if (paused) {
        document.querySelector(".pause").innerHTML = "Aloita";
         clearInterval(counter);   
    }
    paused = !paused;


    
}
function reset(){
min = 25;
sec = 0;
document.querySelector(".sec").innerHTML = "0"+sec;
document.querySelector(".min").innerHTML = min;
clearInterval(counter);
paused = false;

}


function addTime(){
min++;
mins();
}
function removeTime(){
min--;
mins();

}


function mins(){
    if (min !== 0) {
        if (min < 10) {
        document.querySelector(".min").innerHTML = "0" + min;
        } else{
        document.querySelector(".min").innerHTML = min;
        }
    }
}

function secs(){
    if(sec === 0) {
        sec = 60;
        sec--;
        min--;
    }

    if (sec < 10) {
        document.querySelector(".sec").innerHTML = "0" + sec;
    } else{
        document.querySelector(".sec").innerHTML = sec;
    }

    sec--;
}


function startBreak(){
    min = breakLength;
    if (min === 0 && sec === 0 || (min < 0)) {
        document.querySelector(".sec").innerHTML = breakLength;
        document.querySelector(".min").innerHTML = "00";
    }
    paused = false;

}


function addBreak(){
    breakLength++;
        if (breakLength < 10) {
        document.querySelector(".minBreak").innerHTML = "0" + breakLength;
    } else{
        document.querySelector(".minBreak").innerHTML = breakLength;
    }
}




function removeBreak(){
  breakLength--;
        if (breakLength < 10) {
        document.querySelector(".minBreak").innerHTML = "0" + breakLength;
    } else{
        document.querySelector(".minBreak").innerHTML = breakLength;
    }
}






document.querySelector(".add").addEventListener("click", addTime);
document.querySelector(".remove").addEventListener("click", removeTime);

document.querySelector(".breakAdd").addEventListener("click", addBreak);
document.querySelector(".breakRemove").addEventListener("click", removeBreak);


document.querySelector(".reset").addEventListener("click", reset);
document.querySelector(".pause").addEventListener("click", pause);
