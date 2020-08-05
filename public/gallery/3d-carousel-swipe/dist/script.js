"use strict";
var getTanFromDegrees = function (deg) { return Math.tan((deg * Math.PI) / 180); };
var camera = document.querySelector(".camera");
var cameraHeight = camera.offsetHeight;
var swiper = document.querySelector(".swiper");
var swiperHeight = swiper.offsetHeight;
var dCarousel = document.querySelector(".d-carousel");
var dCarouselItems = dCarousel.children;
var dCarouselItemCount = dCarouselItems.length;
var dCarouselItemDeg = 360 / dCarouselItemCount;
var dCarouselItemTanDegHalf = Math.tan(getTanFromDegrees(dCarouselItemDeg / 2));
var dCarouselItemR = cameraHeight / 2 / dCarouselItemTanDegHalf;
dCarousel.style.setProperty("--d-carousel-item-r", dCarouselItemR + "px");
dCarousel.style.setProperty("--d-carousel-item-deg", dCarouselItemDeg + "deg");
Array.from(dCarouselItems).forEach(function (item, i) {
    return item.style.setProperty("--i", "" + i);
});
var swipeDeg = 0;
var previousDeltaY = 0;
var deltaYDelta = 0;
var manager = new Hammer.Manager(swiper);
var Pan = new Hammer.Pan({ threshold: 10 });
manager.add(Pan);
manager.on("pan", function (e) {
    var deltaY = e.deltaY;
    deltaYDelta = deltaY - previousDeltaY;
    previousDeltaY = deltaY;
    var direction = e.offsetDirection;
    if (direction === 8 || direction === 16) {
        var swipeDegDelta = (deltaYDelta / swiperHeight) * 360;
        swipeDeg -= swipeDegDelta;
        dCarousel.style.setProperty("--d-carousel-rotate-x", swipeDeg + "deg");
    }
    if (e.isFinal) {
        previousDeltaY = 0;
    }
});
var disableTouchMove = function () {
    document.body.addEventListener("touchmove", function (e) {
        e.preventDefault();
    }, { passive: false });
};
disableTouchMove();