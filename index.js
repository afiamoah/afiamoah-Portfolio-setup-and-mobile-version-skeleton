const menu=document.querySelector(".hamburger")
const menuItems=document.querySelector(".nav-container")

menu.addEventListener('click',function(){
  menu.classList.toggle("active")
  menuItems.classList.toggle("active")

})

const navelements=document.querySelectorAll(".nav-items");
for(var x=0;x<navelements.length;x++){
  navelements[x].addEventListener('click',()=>{
    menu.classList.remove("active")
    menuItems.classList.remove("active")
  })
}
