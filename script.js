// Change text content dynamically
document.getElementById("transformTextButton").addEventListener("click", function() {
    const textElement = document.getElementById("text");
    textElement.textContent = "Vibranium tech is now activated in your system!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("unleashStyleButton").addEventListener("click", function() {
    const textElement = document.getElementById("text");
    textElement.classList.toggle("new-style");
  });
  
  // Add a new element when button is clicked
  document.getElementById("summonElementButton").addEventListener("click", function() {
    const contentSection = document.getElementById("content");
    const newElement = document.createElement("p");
    newElement.textContent = "A new Vibranium tool has been summoned!";
    contentSection.appendChild(newElement);
  });
  
  // Remove the last element when button is clicked
  document.getElementById("vanquishElementButton").addEventListener("click", function() {
    const contentSection = document.getElementById("content");
    const lastElement = contentSection.lastElementChild;
    if (lastElement) {
      contentSection.removeChild(lastElement);
    }
  });
  