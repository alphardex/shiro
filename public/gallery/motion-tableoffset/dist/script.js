const scaleInConfig = {
  type: "chars",
  charsClass: "scale-in-bounce",
};
const staggeredScaleInTexts = document.querySelectorAll(".staggered-scale-in");
const split1 = new SplitText(staggeredScaleInTexts[0], scaleInConfig);
const split2 = new SplitText(staggeredScaleInTexts[1], scaleInConfig);
const split3 = new SplitText(staggeredScaleInTexts[2], scaleInConfig);
split1.chars.forEach((item, i) => {
  item.style.setProperty("--i", `${i}`);
});
split2.chars.forEach((item, i) => {
  item.style.setProperty("--i", `${i}`);
});
split3.chars.forEach((item, i) => {
  item.style.setProperty("--i", `${i}`);
});