let accordionToggles = document.querySelectorAll(".accordion a");
accordionToggles.forEach(toggle =>
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    toggle.nextElementSibling.classList.toggle("active");
  })
);
