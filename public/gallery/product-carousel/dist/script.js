"use strict";
var navLinks = document.querySelectorAll(".carousel .nav-link");
var slides = document.querySelectorAll(".carousel .slides img");
var overlays = document.querySelectorAll(".carousel .bar");
var maxZIndex = navLinks.length;
var easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
slides[0].classList.add("active");
navLinks[0].classList.add("active");
navLinks.forEach(function (navLink, activeIndex) {
    overlays[activeIndex].style.zIndex = "" + (navLinks.length -
        activeIndex);
    navLink.addEventListener("click", function () {
        // nav-link
        navLinks.forEach(function (navLink) { return navLink.classList.remove("active"); });
        navLink.classList.add("active");
        // slide
        var currentSlide = document.querySelector(".carousel .slides img.active");
        var slideFadeOut = currentSlide.animate([
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(5%)", opacity: 0 }
        ], {
            duration: 600,
            easing: "ease-in",
            fill: "forwards"
        });
        slideFadeOut.onfinish = function () {
            slides.forEach(function (slide) { return slide.classList.remove("active"); });
            var activeSlide = slides[activeIndex];
            activeSlide.classList.add("active");
            activeSlide.animate([
                {
                    transform: "translateX(-5%)",
                    opacity: 0
                },
                {
                    transform: "translateX(0)",
                    opacity: 1
                }
            ], { duration: 600, easing: "ease-out", fill: "forwards" });
        };
        // overlay
        maxZIndex += 1;
        var activeOverlay = overlays[activeIndex];
        activeOverlay.style.zIndex = "" + maxZIndex;
        activeOverlay.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 1200, fill: "forwards", easing: easeInOutQuart });
    });
});