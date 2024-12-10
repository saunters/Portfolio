const textOptions = [
  "exercise (running, playing basketball, mma, etc).",
  "listen to music (literally any genre).",
  "explore new technologies.",
  "research stocks and keep up with trends.",
  "try new food.",
  "travel to new places.",
  "watch movies (Interstellar is the greatest movie ever made)."
];

const typingContent = document.getElementById("typing-content");
let currentIndex = 0;
let typingInterval; // Variable to store the interval ID

function typeText(text, speed = 100) {
  let index = 0;
  typingContent.textContent = ""; // Clear current text

  // Clear any previous typing intervals
  if (typingInterval) clearInterval(typingInterval);

  // Start typing animation
  typingInterval = setInterval(() => {
    typingContent.textContent += text[index];
    index++;

    // Stop typing when the text is complete
    if (index === text.length) {
      clearInterval(typingInterval); // Clear interval after finishing
    }
  }, speed);
}

function loopText() {
  typeText(textOptions[currentIndex]); // Display current text
  currentIndex = (currentIndex + 1) % textOptions.length; // Move to next
}

loopText(); // Initial call
setInterval(loopText, 6000); // Change every 5 seconds
