const getTanFromDegrees = (deg: number) => Math.tan((deg * Math.PI) / 180);
const camera = document.querySelector(".camera") as HTMLElement;
const cameraHeight = camera.offsetHeight;
const swiper = document.querySelector(".swiper");
const swiperHeight = (swiper as HTMLElement).offsetHeight;
const dCarousel = document.querySelector(".d-carousel") as HTMLElement;
const dCarouselItems = dCarousel.children;
const dCarouselItemCount = dCarouselItems.length;
const dCarouselItemDeg = 360 / dCarouselItemCount;
const dCarouselItemTanDegHalf = Math.tan(
  getTanFromDegrees(dCarouselItemDeg / 2)
);
const dCarouselItemR = cameraHeight / 2 / dCarouselItemTanDegHalf;
dCarousel.style.setProperty("--d-carousel-item-r", `${dCarouselItemR}px`);
dCarousel.style.setProperty("--d-carousel-item-deg", `${dCarouselItemDeg}deg`);
Array.from(dCarouselItems).forEach((item, i) =>
  (item as HTMLElement).style.setProperty("--i", `${i}`)
);
let swipeDeg = 0;
let previousDeltaY = 0;
let deltaYDelta = 0;
const manager = new Hammer.Manager(swiper);
const Pan = new Hammer.Pan({ threshold: 10 });
manager.add(Pan);
manager.on("pan", (e) => {
  const deltaY = e.deltaY;
  deltaYDelta = deltaY - previousDeltaY;
  previousDeltaY = deltaY;
  const direction = e.offsetDirection;
  if (direction === 8 || direction === 16) {
    const swipeDegDelta = (deltaYDelta / swiperHeight) * 360;
    swipeDeg -= swipeDegDelta;
    dCarousel.style.setProperty("--d-carousel-rotate-x", `${swipeDeg}deg`);
  }
  if (e.isFinal) {
    previousDeltaY = 0;
  }
});
const disableTouchMove = () => {
  document.body.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    { passive: false }
  );
};
disableTouchMove();
