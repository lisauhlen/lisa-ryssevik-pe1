const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".hamburger-button");

menuIcon.addEventListener("click", openCloseMenu);

function openCloseMenu(){
    menu.classList.toggle("open-menu");
    menuIcon.classList.toggle("close-menu");
}