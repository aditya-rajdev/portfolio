const header = document.querySelector(".site-header");
const links = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const themeBtn = document.getElementById("themeBtn");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);

  let current = "home";
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= 160) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth", block:"start"});
    mobileMenu.classList.remove("open");
  });
});

menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

document.getElementById("resumeBtn").addEventListener("click", e => {
  e.preventDefault();
  alert("Add your resume PDF path in index.html, then replace this button link.");
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
