// Header Section variables
let burgerBtn = document.getElementById("burgerMenu");
let closeMenuBtn = document.getElementById("close-menu");
let sideNavigation = document.getElementById("sideNav");
let sideNavigationBg = document.getElementById("sideNavBg");
let pages = document.querySelectorAll(".pages")
// 

// Header Section Methods
burgerBtn.addEventListener('click', function(){
    openNavigation();
});
closeMenuBtn.addEventListener('click', function(){
    closeNavigation();
});
for(let i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', function(){
        closeNavigation();
    });
}
sideNavigationBg.addEventListener('click', function(){
    closeNavigation();
})
function openNavigation() {
    sideNavigation.style.width = "300px";
    sideNavigationBg.style.opacity = "0.6";
    sideNavigationBg.style.display = "block";
}
function closeNavigation() {
    sideNavigation.style.width = "0px";
    sideNavigationBg.style.opacity = "0";
    sideNavigationBg.style.display = "none";
}
// end of Header Section