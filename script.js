// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Get references to HTML elements
  const counterValue = document.getElementById("counter-value");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");
  const resetButton = document.getElementById("reset");

  // Initialize the counter variable
  let counter = 0;

  // Add event listener to the increase button
  increaseButton.addEventListener("click", () => {
    counter++;
    counterValue.innerHTML = counter;
  });

  // Add event listener to the decrease button
  decreaseButton.addEventListener("click", () => {
    counter--;
    counterValue.innerHTML = counter;
  });

  // Add event listener to the reset button
  resetButton.addEventListener("click", () => {
    counter = 0; // Reset counter to zero
    counterValue.innerHTML = counter;
  });
});
