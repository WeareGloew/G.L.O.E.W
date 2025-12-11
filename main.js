/* ---------------------------------------
   1. Auto-update footer year
---------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/* ---------------------------------------
   2. Soft fade-in when elements come into view
---------------------------------------- */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade");
        observer.unobserve(entry.target); // prevents repeated animation
      }
    });
  },
  { threshold: 0.2 }
);

// Apply to all sections and hero elements
document.querySelectorAll("section, .hero, header, footer").forEach((el) => {
  observer.observe(el);
});

/* ---------------------------------------
   3. Smooth internal link scrolling
---------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
