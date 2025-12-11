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
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("header nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      navToggle.classList.toggle("nav-open");
    });

    // Close menu when a link is clicked
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navToggle.classList.remove("nav-open");
      });
    });

    // Reset on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        nav.classList.remove("nav-open");
        navToggle.classList.remove("nav-open");
      }
    });
  }
});