document.addEventListener("DOMContentLoaded", function () {
  let myDate = new Date();
  hour = myDate.getHours();
  data = document.getElementById("wishes");
  container = document.querySelector(".container");
  if (0 < hour && hour < 4) {
    data.innerHTML = "Good Evening";
    container.style.backgroundImage = "url('assets/night.jpg')";
    container.style.color = "rgb(216, 255, 255)";
  } else if (4 < hour && hour < 12) {
      data.innerHTML = "Good Morning";
      container.style.backgroundImage = "url('assets/morning.jpg')";
      container.style.color = "rgb(106, 239, 40)";
  } else if (12 < hour && hour < 17) {
    data.innerHTML = "Good Afternoon";
    container.style.backgroundImage = "url('assets/afternoon.jpg')";
    container.style.color = "rgb(106, 239, 40)";
  } else if (17 < hour && hour < 19) {
    data.innerHTML = "Good Evening";
    container.style.backgroundImage = "url('assets/evening.jpg')";
    container.style.color = "rgb(216, 255, 255)";
  } else {
    data.innerHTML = "Good Evening";
    container.style.backgroundImage = "url('assets/prenight.jpg')";
    container.style.color = "white";
  }
});
