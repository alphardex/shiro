let accordionItems = document.querySelectorAll(".accordion .accordion-item");
accordionItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
