// Add JavaScript code for your web site here and call it from index.html.
function toggleMessage() {
    const msg = document.getElementById("message");
    msg.style.display = msg.style.display === "none" ? "block" : "none";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("formResponse").textContent = "Thanks for contacting us!";
        form.reset();
      });
    }
  });
  
