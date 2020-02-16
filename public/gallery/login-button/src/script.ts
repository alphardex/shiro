let btn = document.querySelector(".login");
btn.addEventListener("click", e => {
  (btn as Element).classList.add("active");
  setTimeout(() => {
    (btn as Element).classList.add("verified");
  }, 3000);
});
