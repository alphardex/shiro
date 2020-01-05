let slideshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slideshow .slide");
let bars = document.querySelectorAll(".bars .bar");
let dots = document.querySelectorAll(".nav-dots .dot a");
let slideTitles = document.querySelectorAll(".slide-title");

let barSlideIn = (bar: Element, delay: number) => {
  return bar.animate(
    [
      { transform: "scaleY(0)", transformOrigin: "top" },
      { transform: "scaleY(1)", transformOrigin: "top" }
    ],
    {
      duration: 800,
      easing: "ease-in-out",
      fill: "forwards",
      delay: 200 * delay
    }
  );
};

let barSlideOut = (bar: Element, delay: number) => {
  return bar.animate(
    [
      { transform: "scaleY(1)", transformOrigin: "top" },
      { transformOrigin: "bottom", offset: 0.001 },
      { transform: "scaleY(0)", transformOrigin: "bottom" }
    ],
    {
      duration: 800,
      easing: "ease-in-out",
      fill: "forwards",
      delay: 200 * delay
    }
  );
};

let titleFadeIn = (title: Element) => {
  return title.animate(
    [
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 500,
      easing: "ease",
      fill: "forwards",
      delay: 500
    }
  );
};

let titleFadeOut = (title: Element) => {
  return title.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(100%)" }
    ],
    {
      duration: 500,
      easing: "ease",
      fill: "forwards"
    }
  );
};

let pageTransition = (activeIndex: number) => {
  slideTitles.forEach(title => titleFadeOut(title));
  Promise.all(
    Array.from(bars).map((bar, i) => barSlideIn(bar, i).finished)
  ).then(() => {
    setActiveIndex(activeIndex);
    bars.forEach((bar, i) => {
      barSlideOut(bar, i);
    });
    slideTitles.forEach(title => titleFadeIn(title));
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
