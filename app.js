var logo = document.querySelector(".logo");
    overlayH1 = document.querySelector(".overlayH1");
    var slides = document.querySelectorAll(".slides");
    var menu = document.querySelector(".menu");
    var btn = document.querySelector(".btn");
    var bar1 = document.querySelector(".bar1");
    var bar2 = document.querySelector(".bar2");
    var bar3 = document.querySelector(".bar3");
    var popUp = document.querySelector(".Pop-up");
    var closeBtn = document.querySelector(".closeBtn");
    var contactBtn = document.querySelector(".contactBtn");
    var popUpContainer = document.querySelector(".Pop-up-container")
    var backToTop = document.getElementById("top");
    var imgCont = document.querySelectorAll(".imgCont");
window.addEventListener("DOMContentLoaded", function () {
    var release = setTimeout(function () {
        }, 3000);
     logo.style.transform = "translatex(3px)";
     overlayH1.style.transform = "translateY(-3px)";
     btn.style.transform = "translatex(3px)";
 })
var current = 0;
    var repeat = setInterval(function () {
       current+=100;
           slides.forEach(function (each) {
           if(current == 600) {
           current = 0;
       }
        each.style.transition = "all 0.9s";
        each.style.transform = `translate(-${current}%)`;
        })
    }, 6000)
 window.addEventListener("scroll", function(){
    var scrollHeight = window.pageYOffset;
    backToTop.style.transition = "0.8s ease-in";
    if (scrollHeight > 1320) {
      backToTop.style.opacity = 1;
      backToTop.style.right = "2.1rem";
    } else{
      backToTop.style.opacity = 0;
       backToTop.style.right = "-2.1rem";
    }
  })
   
        
       function myToggle() {
         menu.classList.toggle("show");
         menu.style.transition = "0.5s linear";
         bar1.classList.toggle("bar1change");
         bar2.classList.toggle("bar2change");
         bar3.classList.toggle("bar3change");   
         bar1.style.transition="all 0.7s";
         bar2.style.transition="all 0.5s";
         bar3.style.transition="all 0.7s";
        }

        closeBtn.addEventListener("click", function(){
          popUp.style.transition = "ease-in 0.4s";
          popUp.classList.toggle("popUpToggle");
          popUpContainer.classList.toggle("Pop-up-container-toggle");
        })

        contactBtn.addEventListener("click", function(){
       	popUp.classList.toggle("popUpToggle");
        	popUp.style.transition = "ease-in 0.4s";
        	popUpContainer.classList.toggle("Pop-up-container-toggle");
        })

        window.addEventListener("scroll", function(){
          for (var i = 0; i < imgCont.length; i++) {
         var each = imgCont[i];
         var scrollHeight = window.pageYOffset;
         if(screen.width > 600 ) {
             if (scrollHeight > 3680) {
          each.style.transition = "all 2s";
          each.style.transform = "rotate(0)"
          each.style.left = "0%";
          each.style.opacity = 1;
         }
         }else{
         if (scrollHeight > 6380) {
          each.style.transition = "all 2s";
          each.style.transform = "rotate(0)"
          each.style.left = "0%";
          each.style.opacity = 1;
         }else{
          each.style.left = "100%";
          each.style.transform = "rotate(-300deg)";
          each.style.opacity = 0; break
         }}}})