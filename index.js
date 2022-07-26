/* eslint-disable */
const MobileMenu = document.querySelector(".hamburger");
const MenuItems = document.querySelector(".nav-container");

MobileMenu.addEventListener("click", function () {
    MobileMenu.classList.toggle("active");
    MenuItems.classList.toggle("active");
});
const Links = document.querySelectorAll(".nav-items");
for (var x = 0; x < Links.length; x++) {
    Links[x].addEventListener("click", () => {
        MobileMenu.classList.remove("active");
        MenuItems.classList.remove("active");
    });
}

alert("alert");
console.log("haha");
