//Hamburger menu my favourite
let hamMenu = document.getElementById("menu");
let hamMenuBtnOpen = document.getElementById("menu-open");
function hamshow() {
  //   hamMenu.style.display = "block";
  hamMenu.classList.toggle("viewed-menu");
}
hamMenuBtnOpen.addEventListener("click", hamshow);
// hamMenu.style.left = "600%";
