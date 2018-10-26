var seconds = 12;
var foo;

function redirect() {
  window.open('http://chat.t69.us', '_self');
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
