// Toggle for the Hamburger Menu 

function toggleClass() {
  let menu = document.querySelector('.mainMenu');
  menu.classList.toggle("toggleCls");
} 

let hamburger = document.querySelector('.hamIcon');
hamburger.addEventListener("click", toggleClass);