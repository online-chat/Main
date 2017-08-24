var seconds = 12;
var foo;

function redirect() {
  window.open('https://c.tian.science:4545', '_self');
}

function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 966);
}

countdownTimer();
