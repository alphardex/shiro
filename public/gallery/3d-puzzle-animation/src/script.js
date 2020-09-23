const text = "大前端";
const chars = text.split("");
const char1 = document.querySelectorAll(".char-1");
const char2 = document.querySelectorAll(".char-2");
const char3 = document.querySelectorAll(".char-3");
char1.forEach((e) => (e.textContent = chars[0]));
char2.forEach((e) => (e.textContent = chars[1]));
char3.forEach((e) => (e.textContent = chars[2]));
const cube1 = ".cube-1";
const cube2 = ".cube-2";
const cube3 = ".cube-3";
const cube4 = ".cube-4";
const cube5 = ".cube-5";
const cube6 = ".cube-6";
const cube7 = ".cube-7";
const cube8 = ".cube-8";
const cube9 = ".cube-9";
const cube10 = ".cube-10";
const cube11 = ".cube-11";
const cube12 = ".cube-12";
const cube13 = ".cube-13";
const cube14 = ".cube-14";
const xForwards = "100%";
const xBackwards = "-100%";
const yForwards = "300%";
const yBackwards = "-300%";
const t1 = gsap.timeline({
  defaults: {
    duration: 0.4,
    ease: "power2.in",
  },
});
// 8x1 6y1 5x1 7y-1 9x1 10y1 7x-1 3y1 11x1 12y1 1x-1 11y-1 4x-1 13x-1 14|8y-1
t1.to(cube8, { x: xForwards })
  .to(cube6, { y: yForwards })
  .to(cube5, { x: xForwards })
  .to(cube7, { y: yBackwards })
  .to(cube9, { x: xForwards })
  .to(cube10, { y: yForwards })
  .to(cube7, { x: xBackwards })
  .to(cube3, { y: yForwards })
  .to(cube11, { x: xForwards })
  .to(cube12, { y: yForwards })
  .to(cube1, { x: xBackwards })
  .to(cube11, { y: yBackwards })
  .to(cube4, { x: xBackwards })
  .to(cube13, { x: xBackwards })
  .to([cube14, cube8], { y: yBackwards });
t1.reverse(0);
