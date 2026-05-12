// Set footer year, only if the year element exists
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


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


// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");
    });

    // Close menu when a mobile nav link is clicked
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
      });
    });
  }
});