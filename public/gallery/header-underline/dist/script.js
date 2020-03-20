"use strict";
var underlineMenuItems = document.querySelectorAll(".underline-menu li a");
underlineMenuItems[0].classList.add("router-link-active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("router-link-active"); });
        item.classList.add("router-link-active");
    });
});