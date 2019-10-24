let navtab = document.querySelector("nav.navtab");
let navtabItems = document.querySelectorAll("li.navtab-item");
navtabItems.forEach((navtabItem, activeIndex) =>
  navtabItem.addEventListener("click", () => {
    navtabItems.forEach(navtabItem => navtabItem.classList.remove("active"));
    navtabItem.classList.add("active");
    (navtab as HTMLElement).style.setProperty(
      "--active-index",
      `${activeIndex}`
    );
  })
);
