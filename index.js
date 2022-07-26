const MobileMenu = document.querySelector('.hamburger');
const MenuItems = document.querySelector('.nav-container');
MobileMenu.addEventListener('click', () => {
  MobileMenu.classList.toggle('active');
  MenuItems.classList.toggle('active');
});
const Links = document.querySelectorAll('.nav-items');
for (let x = 0; x < Links.length; x += 1) {
  Links[x].addEventListener('click', () => {
    MobileMenu.classList.remove('active');
    MenuItems.classList.remove('active');
  });
}
