const search = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".searchIcon");
const searchBox = document.querySelector(".search-box");
const closeBtn = document.querySelector(".fa-xmark");
const menu = document.querySelector(".header-menu");
const openMenu = document.querySelector(".open-button");
const closeMenu = document.querySelector(".close-button");
const navbar = document.querySelector(".navbar");
const openClose = document.querySelector(".open-close-menu");
const body = document.querySelector("body");

searchBtn.addEventListener("click", function(){
    console.log(search.classList.contains("active"));
    if(search.classList.contains("active")){
        searchBox.value = '';
        menu.style.opacity = 0;
        navbar.classList.remove("actived");
    }
        
    else{
        search.classList.add('active');
        searchBox.focus();
        menu.style.opacity = 0;
        navbar.classList.remove("actived");
        
    }
})

closeBtn.addEventListener('click', function(){
    search.classList.remove('active');
    searchBox.value = '';
    menu.style.opacity = 1;
})

const toggleNavbar = () => {
    navbar.classList.toggle("actived");
}

openClose.addEventListener("click", () => toggleNavbar());
