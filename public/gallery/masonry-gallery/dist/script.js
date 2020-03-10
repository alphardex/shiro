"use strict";
var masonry = document.querySelector(".masonry");
masonry.style.opacity = "0";
var masonryItems = document.querySelectorAll(".masonry__item");
masonryItems.forEach(function (item, i) {
    item.style.setProperty("--i", "" + (i + 1));
});
var loading = document.querySelector(".loading");
var letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach(function (letter, i) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = i / 10 + "s";
    loading.append(span);
});
document.body.classList.add("js-loading");
window.addEventListener("load", function () {
    document.body.classList.remove("js-loading");
    loading.style.opacity = "0";
    masonry.style.opacity = "1";
}, false);