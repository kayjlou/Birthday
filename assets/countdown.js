// Set date we are counting down to
var countDownDate = new Date(" April 22, 2019 12:01:00").getTime();

//Update the count down to every one second
var x = setInterval(function() {
  //Get today's date and time
  var now = new Date().getTime();

  //Find the distance between now and countdown date
  var distance = countDownDate - now;

  //Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Display result within HTML
  document.getElementById("countdown").innerHTML =
    days + " days " + hours + ":" + minutes + ":" + seconds;

  //If countdown is finished write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Expired";
  }
}, 1000);
