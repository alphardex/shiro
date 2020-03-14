const sizes = ["short", "tall", "taller"];
const sample = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
let masonry = document.querySelector(".masonry");
(masonry as HTMLElement).style.opacity = "0";
let masonryItems = document.querySelectorAll(".masonry__item");
masonryItems.forEach((item, i) => {
  (item as HTMLElement).style.setProperty("--i", `${i + 1}`);
  (item as HTMLElement).setAttribute(sample(sizes), "");
});
let loading = document.querySelector(".loading");
let letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${i / 10}s`;
  loading.append(span);
});
document.body.classList.add("js-loading");
window.addEventListener(
  "load",
  () => {
    document.body.classList.remove("js-loading");
    (loading as HTMLElement).style.opacity = "0";
    (loading as HTMLElement).style.visibility = "hidden";
    (masonry as HTMLElement).style.opacity = "1";
  },
  false
);
