// Optional JS for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 50);
});


const images = document.querySelectorAll(".gallery-grid img");
images.forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `<img src="${img.src}" alt="">`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => overlay.remove());
  });
});


document.getElementById("musicBtn").addEventListener("click", () => {
  document.getElementById("musicPlayer").style.display = "block";
});

