let tabLinks = document.querySelectorAll(".tabs__link");
let tabContents = document.querySelectorAll(".tabs__content");
tabLinks[0].classList.add("active");
tabContents[0].classList.add("active");
tabLinks.forEach((tabLink, i) => {
  tabLink.addEventListener("click", () => {
    tabLinks.forEach(tabLink => tabLink.classList.remove("active"));
    tabContents.forEach(tabContent => tabContent.classList.remove("active"));
    tabLink.classList.add("active");
    tabContents[i].classList.add("active");
  });
});
