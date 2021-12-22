const menu = document.querySelector(".menu");

const navigationbtns = document.querySelectorAll(".navigationbtn");
const list = document.querySelector(".list");

menu.addEventListener('click',function(){
    list.classList.toggle("active-list");
    menu.classList.toggle("active-menu");
});

navigationbtns.forEach(function(btn){
btn.addEventListener('click',function(){
    list.classList.remove("active-list");
    menu.classList.remove("active-menu");
})
})
