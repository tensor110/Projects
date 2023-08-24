function prependZero(number) {
  if (number <= 9) return "0" + parseInt(number);
  else return number;
}
let s = 0;
let m = 0;
let h = 0;
function time() {
  storeCounter = setInterval(() => {
    s = parseInt(s) + 1;
    while (s == 60) {
      s = 0;
      m = parseInt(m) + 1;
    }
    while (m == 60) {
      s = 0;
      m = 0;
      h = parseInt(h) + 1;
    }
    s = prependZero(s);
    m = prependZero(m);
    h = prependZero(h);
    document.getElementById("second").innerHTML = s;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("hour").innerHTML = h;
  }, 1000);
}
time();
function playpause1() {
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "block";
  clearInterval(storeCounter)
}
function playpause2() {
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";
  time();
}
