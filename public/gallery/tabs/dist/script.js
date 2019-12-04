var tabLinks = document.querySelectorAll(".tabs__link");
var tabContents = document.querySelectorAll(".tabs__content");
tabLinks[0].classList.add("active");
tabContents[0].classList.add("active");
tabLinks.forEach(function (tabLink, i) {
    tabLink.addEventListener("click", function () {
        tabLinks.forEach(function (tabLink) { return tabLink.classList.remove("active"); });
        tabContents.forEach(function (tabContent) { return tabContent.classList.remove("active"); });
        tabLink.classList.add("active");
        tabContents[i].classList.add("active");
    });
});