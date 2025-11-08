const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();
