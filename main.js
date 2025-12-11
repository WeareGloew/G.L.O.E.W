// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in on scroll
const animatedElements = document.querySelectorAll(".fade-in, .fade-in-stagger");

function handleFade() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleFade);
window.addEventListener("load", handleFade);