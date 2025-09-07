window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
  }
});
