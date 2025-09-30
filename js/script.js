document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!menuToggle) return console.error("menu-toggle introuvable");
  if (!navLinks) return console.error("nav-links introuvable");

  console.log("script.js chargé");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    console.log("Menu burger cliqué, classes actuelles:", navLinks.className);
  });
});
