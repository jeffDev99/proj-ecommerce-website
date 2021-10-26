//close btn menu (all pages)
let mainNavList = document.querySelector(".main-nav-mobile");
let mainNavCloseBtn = document.querySelector("#btnCloseMobileNav");
let mainNavOpenBtn = document.querySelector("#hamberIcon");
mainNavOpenBtn.addEventListener("click", function() {
    mainNavList.style.transform = "translate3d(0,0 ,0)";
})
mainNavCloseBtn.addEventListener("click", function() {
    mainNavList.style.transform = "translate3d(0,-100% ,0)";
})