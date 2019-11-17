const AUTO_PLAY_SECOND = 4000;

let carousel = document.querySelector(".carousel");
let dots = document.querySelectorAll(".dot a");
let slides = document.querySelector(".slides");
let slideCount = dots.length;

let setActiveIndex = (activeIndex: number) => {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[activeIndex].classList.add("active");
  (carousel as HTMLElement).style.setProperty(
    "--active-index",
    `${activeIndex}`
  );
};

let scrollLeft = () => {
  let minIndex = false;
  let activeIndex = Number(
    (carousel as HTMLElement).style.getPropertyValue("--active-index")
  );
  activeIndex--;
  if (activeIndex === -1) {
    minIndex = true;
    activeIndex = slideCount - 1;
  }
  setActiveIndex(activeIndex);
  if (minIndex) {
    slides.scrollBy(
      (carousel as HTMLElement).offsetWidth * (slideCount - 1),
      0
    );
  } else {
    slides.scrollBy(-(carousel as HTMLElement).offsetWidth, 0);
  }
};

let scrollRight = () => {
  let maxIndex = false;
  let activeIndex = Number(
    (carousel as HTMLElement).style.getPropertyValue("--active-index")
  );
  activeIndex++;
  if (activeIndex === slideCount) {
    maxIndex = true;
    activeIndex = 0;
  }
  setActiveIndex(activeIndex);
  if (maxIndex) {
    slides.scrollBy(
      -(carousel as HTMLElement).offsetWidth * (slideCount - 1),
      0
    );
  } else {
    slides.scrollBy((carousel as HTMLElement).offsetWidth, 0);
  }
};

// dots
dots[0].classList.add("active");
dots.forEach((dot, activeIndex) => {
  dot.addEventListener("click", () => {
    setActiveIndex(activeIndex);
  });
});

// arrows
let leftArrow = document.querySelector(".nav-arrows .arrow-left");
let rightArrow = document.querySelector(".nav-arrows .arrow-right");
leftArrow.addEventListener("click", scrollLeft);
rightArrow.addEventListener("click", scrollRight);

// auto play
if (carousel.classList.contains("auto-play")) {
  setInterval(scrollRight, AUTO_PLAY_SECOND);
}
