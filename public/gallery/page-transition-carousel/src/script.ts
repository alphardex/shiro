let slideshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slideshow .slide");
let bars = document.querySelectorAll(".bars .bar");
let dots = document.querySelectorAll(".nav-dots .dot a");
let slideTitles = document.querySelectorAll(".slide-title");
// https://easings.net
// easing is very important, here I chose easeInOutCubic.
// If you found a better easing function, just overwrite it.
let easing = "cubic-bezier(0.645, 0.045, 0.355, 1)";

let staggeredSlideIn = (element: Element, delay: number) => {
  return element.animate(
    [
      { transform: "scaleY(0)", transformOrigin: "top" },
      { transform: "scaleY(1)", transformOrigin: "top" }
    ],
    {
      duration: 800,
      easing: easing,
      fill: "forwards",
      delay: 200 * delay
    }
  );
};

let staggeredSlideOut = (element: Element, delay: number) => {
  return element.animate(
    [
      { transform: "scaleY(1)", transformOrigin: "top" },
      { transformOrigin: "bottom", offset: 0.001 },
      { transform: "scaleY(0)", transformOrigin: "bottom" }
    ],
    {
      duration: 800,
      easing: easing,
      fill: "forwards",
      delay: 200 * delay
    }
  );
};

let fadeIn = (element: Element) => {
  return element.animate(
    [
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 1200,
      easing: "ease",
      fill: "forwards",
      delay: 500
    }
  );
};

let fadeOut = (element: Element) => {
  return element.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-100%)" }
    ],
    {
      duration: 600,
      easing: "ease",
      fill: "forwards"
    }
  );
};

let pageTransition = (activeIndex: number) => {
  slideTitles.forEach(slideTitle => fadeOut(slideTitle));
  Promise.all(
    Array.from(bars).map((bar, i) => staggeredSlideIn(bar, i).finished)
  ).then(() => {
    setActiveIndex(activeIndex);
    bars.forEach((bar, i) => {
      staggeredSlideOut(bar, i);
    });
    slideTitles.forEach(slideTitle => fadeIn(slideTitle));
  });
};

let setActiveIndex = (activeIndex: number) => {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[activeIndex].classList.add("active");
  (slideshow as HTMLElement).style.setProperty(
    "--active-index",
    `${activeIndex}`
  );
  slides.forEach(slide => ((slide as HTMLElement).style.zIndex = `-1`));
  (slides[activeIndex] as HTMLElement).style.zIndex = `0`;
};

// dots
dots[0].classList.add("active");
dots.forEach((dot, activeIndex) => {
  dot.addEventListener("click", () => {
    let currentActiveIndex = (slideshow as HTMLElement).style.getPropertyValue(
      "--active-index"
    );
    if (Number(currentActiveIndex) !== activeIndex) {
      pageTransition(activeIndex);
    }
  });
});
