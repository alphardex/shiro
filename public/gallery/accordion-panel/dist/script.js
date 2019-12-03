var accordionToggles = document.querySelectorAll(".accordion a");
accordionToggles.forEach(function (toggle) {
    return toggle.addEventListener("click", function () {
        toggle.classList.toggle("active");
        toggle.nextElementSibling.classList.toggle("active");
    });
});