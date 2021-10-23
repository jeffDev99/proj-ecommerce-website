//close btn menu (all pages)
let mainNavList = document.querySelector(".dashboard-aside-nav");
let mainNavCloseBtn = document.querySelector(".dashboard-aside-header-responsive__close-btn");
let mainNavOpenBtn = document.querySelector(".dashboard-aside-header__open-icon");
mainNavOpenBtn.addEventListener("click", function () {
    mainNavList.style.transform = "translate3d(0,100% ,0)";
})
mainNavCloseBtn.addEventListener("click", function () {
    mainNavList.style.transform = "translate3d(0,0 ,0)";
})
