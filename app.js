const menu = document.querySelector(".menu");

const list = document.querySelector(".list");

menu.addEventListener('click',function(){
    list.classList.toggle("active-list");
    menu.classList.toggle("active-menu");
})