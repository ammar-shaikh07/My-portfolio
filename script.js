// ========================================
// Highlight Active Nav Link
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  try {
    const navLinks = document.querySelectorAll("header.nav nav a");

    navLinks.forEach(link => {
      const current = location.pathname.split("/").pop();   // current page
      const target = link.getAttribute("href");

      if (current === "" && target === "index.html") {
        link.classList.add("active");
      } 
      else if (current === target) {
        link.classList.add("active");
      }
    });
  } catch (e) {
    console.log("Nav highlight error:", e);
  }
});

// ========================================
// MOBILE MENU SLIDE TOGGLE
// ========================================
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Setup slide animation
if (navMenu) {
  navMenu.style.maxHeight = "0px";
  navMenu.style.overflow = "hidden";
  navMenu.style.transition = "max-height 0.45s ease";
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    if (navMenu.style.maxHeight === "0px") {
      navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    } else {
      navMenu.style.maxHeight = "0px";
    }
  });
}