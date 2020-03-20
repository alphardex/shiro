let underlineMenuItems = document.querySelectorAll(".underline-menu li a");
underlineMenuItems[0].classList.add("router-link-active");
underlineMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    underlineMenuItems.forEach(item => item.classList.remove("router-link-active"));
    item.classList.add("router-link-active");
  });
});