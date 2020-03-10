let masonry = document.querySelector(".masonry");
(masonry as HTMLElement).style.opacity = "0";
let loading = document.querySelector(".loading");
document.body.classList.add("js-loading");
window.addEventListener(
  "load",
  () => {
    document.body.classList.remove("js-loading");
    (loading as HTMLElement).style.opacity = "0";
    (masonry as HTMLElement).style.opacity = "1";
  },
  false
);
