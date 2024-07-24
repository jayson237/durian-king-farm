document.addEventListener("DOMContentLoaded", function () {
  var counterButton = document.getElementById("counter-button");
  var counterValue = document.getElementById("counter-value");

  counterButton.addEventListener("click", function () {
    var currentCount = parseInt(counterValue.textContent, 10);
    counterValue.textContent = currentCount + 1;
  });
});
