var navtab = document.querySelector("nav.navtab");
var navtabItems = document.querySelectorAll("li.navtab-item");
navtabItems.forEach(function (navtabItem, activeIndex) {
    return navtabItem.addEventListener("click", function () {
        navtabItems.forEach(function (navtabItem) { return navtabItem.classList.remove("active"); });
        navtabItem.classList.add("active");
        navtab.style.setProperty("--active-index", "" + activeIndex);
    });
});