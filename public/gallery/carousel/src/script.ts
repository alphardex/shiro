// For main purpose(sliding), JS is not necessary, just let the dots and arrows work too.
let carousel = document.querySelector(".carousel");
let dots = document.querySelectorAll(".dot a");
let slides = document.querySelector(".slides");
let slideCount = dots.length;

// dots
let setActiveIndex = (activeIndex: number) => {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[activeIndex].classList.add("active");
  (carousel as HTMLElement).style.setProperty(
    "--active-index",
    `${activeIndex}`
  );
};
dots[0].classList.add("active");
dots.forEach((dot, activeIndex) => {
  dot.addEventListener("click", () => {
    setActiveIndex(activeIndex);
  });
});

// arrows
let leftArrow = document.querySelector(".nav-arrows .arrow-left");
let rightArrow = document.querySelector(".nav-arrows .arrow-right");
leftArrow.addEventListener("click", () => {
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
});
rightArrow.addEventListener("click", () => {
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
});
