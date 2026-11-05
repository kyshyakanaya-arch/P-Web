const navMenu = document.querySelector(".nav-menu");
const menuToggle = document.querySelector(".menu-toggle");

function checkScreenSize() {
    if (window.innerWidth <= 768) {
        navMenu.style.display = "none";
        menuToggle.style.display = "block";
    } else {
        navMenu.style.display = "flex";
        menuToggle.style.display = "none";
        navMenu.classList.remove("active");
    }
}

checkScreenSize();
window.addEventListener("resize", checkScreenSize);

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
});