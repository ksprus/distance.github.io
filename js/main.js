const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");
const menuDBtn = document.querySelector(".icon-link-dropdown-btn");
const menuDropdown = document.querySelector(".menuDropdown");

menuBtn.addEventListener('click', function() {
    menu.classList.toggle("active");
});

menuDBtn.addEventListener('click', function() {
    menuDropdown.classList.toggle("active");
});

