var hr = 0;
var min = 0;
var sec = 0;
var milliSec = 0;

var timer = false;


function start() {
    timer = true;
    stopWatch();
}




function stop() {

    timer = false;
}



function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    milliSec = 0;



    document.querySelector("#hr").innerHTML = "00";
    document.querySelector("#min").innerHTML = "00";
    document.querySelector("#sec").innerHTML = "00";
    document.querySelector("#milliSec").innerHTML = "00";

}




function stopWatch() {
    if (timer === true) {
        milliSec++

        if (milliSec === 100) {
            milliSec = 0;
            sec++

        }

        if (sec === 60) {
            sec = 0;
            min++

        }


        if (min === 60) {
            min = 0;
            hr++

        }


        var hrString = hr;
        var minString = min;
        var secString = sec;
        var milliSecString = milliSec;



        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (milliSec < 10) {
            milliSecString = "0" + milliSecString;
        }


        document.querySelector("#hr").innerHTML = hrString;
        document.querySelector("#min").innerHTML = minString;
        document.querySelector("#sec").innerHTML = secString;
        document.querySelector("#milliSec").innerHTML = milliSecString;


        setTimeout(stopWatch, 10)
    }
}












