let prevLink = document.querySelector(".prev");
let nextLink = document.querySelector(".next");
let pagination = document.querySelector(".pagination");
let pageNumberLinks = document.querySelectorAll(".page-number a");
let maxPageIndex = pageNumberLinks.length - 1;
pageNumberLinks.forEach((pageNumberLink, activeIndex) => {
  pageNumberLink.addEventListener("click", () => {
    pageNumberLinks.forEach(pageNumberLink =>
      pageNumberLink.parentElement.classList.remove("active")
    );
    pageNumberLink.parentElement.classList.add("active");
    (pagination as HTMLElement).style.setProperty(
      "--active-index",
      `${activeIndex}`
    );
  });
});
prevLink.addEventListener("click", () => {
  pageNumberLinks.forEach(pageNumberLink =>
    pageNumberLink.parentElement.classList.remove("active")
  );
  let activeIndex = Number(
    (pagination as HTMLElement).style.getPropertyValue("--active-index")
  );
  activeIndex = activeIndex > 0 ? activeIndex - 1 : 0;
  pageNumberLinks[activeIndex].parentElement.classList.add("active");
  (pagination as HTMLElement).style.setProperty(
    "--active-index",
    `${activeIndex}`
  );
});
nextLink.addEventListener("click", () => {
  pageNumberLinks.forEach(pageNumberLink =>
    pageNumberLink.parentElement.classList.remove("active")
  );
  let activeIndex = Number(
    (pagination as HTMLElement).style.getPropertyValue("--active-index")
  );
  activeIndex = activeIndex < maxPageIndex ? activeIndex + 1 : maxPageIndex;
  pageNumberLinks[activeIndex].parentElement.classList.add("active");
  (pagination as HTMLElement).style.setProperty(
    "--active-index",
    `${activeIndex}`
  );
});
