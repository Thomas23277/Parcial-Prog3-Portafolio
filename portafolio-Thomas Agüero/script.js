// ===== Enlaces activos =====
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 200;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ===== Header cambia con scroll =====
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// ===== Scroll suave =====
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
