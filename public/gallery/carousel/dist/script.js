var AUTO_PLAY_SECOND = 4000;
var carousel = document.querySelector(".carousel");
var dots = document.querySelectorAll(".dot a");
var slides = document.querySelector(".slides");
var slideCount = dots.length;
var setActiveIndex = function (activeIndex) {
    dots.forEach(function (dot) { return dot.classList.remove("active"); });
    dots[activeIndex].classList.add("active");
    carousel.style.setProperty("--active-index", "" + activeIndex);
};
var scrollLeft = function () {
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
};
var scrollRight = function () {
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
};
// auto play
var autoPlayTimer = setInterval(scrollRight, AUTO_PLAY_SECOND);
var canAutoPlay = carousel.classList.contains("auto-play");
if (!canAutoPlay) {
    clearInterval(autoPlayTimer);
}
var resetTimer = function () {
    if (canAutoPlay) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(scrollRight, AUTO_PLAY_SECOND);
    }
};
// dots
dots[0].classList.add("active");
dots.forEach(function (dot, activeIndex) {
    dot.addEventListener("click", function () {
        resetTimer();
        setActiveIndex(activeIndex);
    });
});
// arrows
var leftArrow = document.querySelector(".nav-arrows .arrow-left");
var rightArrow = document.querySelector(".nav-arrows .arrow-right");
leftArrow.addEventListener("click", function () {
    resetTimer();
    scrollLeft();
});
rightArrow.addEventListener("click", function () {
    resetTimer();
    scrollRight();
});