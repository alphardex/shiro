const scaleInConfig = {
  type: "chars",
  charsClass: "scale-in-bounce",
};
const staggeredScaleInTexts = document.querySelectorAll(".staggered-scale-in");
const split1 = new SplitText(staggeredScaleInTexts[0], scaleInConfig);
const split2 = new SplitText(staggeredScaleInTexts[1], scaleInConfig);
split1.chars.forEach((item, i) => {
  item.style.setProperty("--basic-delay", "0.7s");
  item.style.setProperty("--i", `${i}`);
});
split2.chars.forEach((item, i) => {
  item.style.setProperty("--basic-delay", "3.3s");
  item.style.setProperty("--i", `${i}`);
});
