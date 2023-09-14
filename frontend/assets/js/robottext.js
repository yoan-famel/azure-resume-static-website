var text = "***********************************************\nWelcome to CareerBoostOS - Hosted on Azure CDN!\n***********************************************\n\nCareerBoostOS Version 1.0: Where clouds meet\ncareer lift-off ☁️ Scaling your career with a smile!\n\nAvailable Commands:\n-------------------\n1. CRC - Projects.\n2. Resume - Work history.\n3. Certifications - Credential Highlights.\n4. Contact - Connect with me.\n\n[reader@CareerBoostOS ~]$";
var index = 0;
var isTyping = true;

function displayText() {
  var prompt = document.getElementById("prompt");
  var codeText = document.createElement("code"); // Create a <code> element.

  if (index < text.length && isTyping) {
    codeText.textContent = text.slice(0, index + 1); // Set the text content.
    prompt.innerHTML = codeText.outerHTML; // Update the <pre> with the <code> element.
    index++;
    setTimeout(displayText, 50); // Adjust the timeout for the desired speed.
  } else if (index >= text.length && isTyping) {
    isTyping = false;
    addBlinkingCursor();
  }
}

// Function to add blinking cursor
function addBlinkingCursor() {
  var prompt = document.getElementById("prompt");
  var codeBlock = prompt.querySelector("code");
  var cursor = document.createElement("span");
  cursor.className = "blinking-cursor";
  cursor.textContent = "_"; // Regular-shaped blinking cursor symbol
  codeBlock.appendChild(cursor);
  setTimeout(removeBlinkingCursor, 500); // Blinking interval (0.5 second)
}

// Function to remove blinking cursor
function removeBlinkingCursor() {
  var cursor = document.querySelector(".blinking-cursor");
  if (cursor) {
    cursor.remove();
    setTimeout(addBlinkingCursor, 500); // Blinking interval (0.5 second)
  }
}

window.onload = function() {
  displayText();
};