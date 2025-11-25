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

function changeTheme() {
const theme = document.getElementById("themeSelector").value;

// Remove old theme classes  
document.body.classList.remove("theme-blue", "theme-light", "theme-dark");  

// Apply new theme  
if (theme === "blue") {  
    document.body.classList.add("theme-blue");  
}   
else if (theme === "light") {  
    document.body.classList.add("theme-light");  
}   
else if (theme === "dark") {  
    document.body.classList.add("theme-dark");  
}  
// Green = default, nothing to add

}