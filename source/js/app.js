
var menuBtn = document.getElementById('menu');

var menuList = document.getElementById('menu-list');

menuBtn.onclick = function(event){
  event.preventDefault();

  menuBtn.classList.toggle('menu-btn--active');

  menuList.classList.toggle('open');

};