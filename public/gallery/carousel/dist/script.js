// For main purpose(sliding), JS is not necessary, just let the dots and arrows work too.
var carousel = document.querySelector(".carousel");
var dots = document.querySelectorAll(".dot a");
var slides = document.querySelector(".slides");
var slideCount = dots.length;
// dots
var setActiveIndex = function (activeIndex) {
    dots.forEach(function (dot) { return dot.classList.remove("active"); });
    dots[activeIndex].classList.add("active");
    carousel.style.setProperty("--active-index", "" + activeIndex);
};
dots[0].classList.add("active");
dots.forEach(function (dot, activeIndex) {
    dot.addEventListener("click", function () {
        setActiveIndex(activeIndex);
    });
});
// arrows
var leftArrow = document.querySelector(".nav-arrows .arrow-left");
var rightArrow = document.querySelector(".nav-arrows .arrow-right");
leftArrow.addEventListener("click", function () {
    var minIndex = false;
    var activeIndex = Number(carousel.style.getPropertyValue("--active-index"));
    activeIndex--;
    if (activeIndex === -1) {
        minIndex = true;
        activeIndex = slideCount - 1;
    }
    setActiveIndex(activeIndex);
    if (minIndex) {
        slides.scrollBy(carousel.offsetWidth * (slideCount - 1), 0);
    }
    else {
        slides.scrollBy(-carousel.offsetWidth, 0);
    }
});
rightArrow.addEventListener("click", function () {
    var maxIndex = false;
    var activeIndex = Number(carousel.style.getPropertyValue("--active-index"));
    activeIndex++;
    if (activeIndex === slideCount) {
        maxIndex = true;
        activeIndex = 0;
    }
    setActiveIndex(activeIndex);
    if (maxIndex) {
        slides.scrollBy(-carousel.offsetWidth * (slideCount - 1), 0);
    }
    else {
        slides.scrollBy(carousel.offsetWidth, 0);
    }
});