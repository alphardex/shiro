var slideshow = document.querySelector(".slideshow");
var slides = document.querySelectorAll(".slideshow .slide");
var bars = document.querySelectorAll(".bars .bar");
var dots = document.querySelectorAll(".nav-dots .dot a");
var barSlideIn = function (bar, delay) {
    return bar.animate([
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", transformOrigin: "top" }
    ], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards",
        delay: 200 * delay
    });
};
var barSlideOut = function (bar, delay) {
    return bar.animate([
        { transform: "scaleY(1)", transformOrigin: "top" },
        { transformOrigin: "bottom", offset: 0.001 },
        { transform: "scaleY(0)", transformOrigin: "bottom" }
    ], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards",
        delay: 200 * delay
    });
};
var pageTransition = function (activeIndex) {
    Promise.all(Array.from(bars).map(function (bar, i) { return barSlideIn(bar, i).finished; })).then(function () {
        setActiveIndex(activeIndex);
        bars.forEach(function (bar, i) {
            barSlideOut(bar, i);
        });
    });
};
var setActiveIndex = function (activeIndex) {
    dots.forEach(function (dot) { return dot.classList.remove("active"); });
    dots[activeIndex].classList.add("active");
    slideshow.style.setProperty("--active-index", "" + activeIndex);
    slides.forEach(function (slide) { return (slide.style.zIndex = "0"); });
    slides[activeIndex].style.zIndex = "1";
};
// dots
dots[0].classList.add("active");
dots.forEach(function (dot, activeIndex) {
    dot.addEventListener("click", function () {
        var currentActiveIndex = slideshow.style.getPropertyValue("--active-index");
        if (Number(currentActiveIndex) !== activeIndex) {
            pageTransition(activeIndex);
        }
    });
});