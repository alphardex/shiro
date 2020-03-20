"use strict";
var accordionItems = document.querySelectorAll(".accordion .accordion-item");
accordionItems.forEach(function (item) {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
    });
});