window.onload = function () {
  var sec = 4;
  setInterval(function () {
    var a = new Date();
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if (sec == -1) {
      window.location.href = "kontakt.html";
    }
  }, 1000);
};
