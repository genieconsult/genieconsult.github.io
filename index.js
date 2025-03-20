// index.js

document.addEventListener("DOMContentLoaded", function() {
  const greeting = document.querySelector("h1");

  const hours = new Date().getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Good Morning!";
  } else if (hours < 18) {
    timeOfDay = "Good Afternoon!";
  } else {
    timeOfDay = "Good Evening!";
  }

  greeting.textContent = timeOfDay + " Welcome to My Educational Website";
});
