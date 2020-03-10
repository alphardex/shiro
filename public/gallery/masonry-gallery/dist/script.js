"use strict";
var masonry = document.querySelector(".masonry");
masonry.style.opacity = "0";
var loading = document.querySelector(".loading");
document.body.classList.add("js-loading");
window.addEventListener("load", function () {
    document.body.classList.remove("js-loading");
    loading.style.opacity = "0";
    masonry.style.opacity = "1";
}, false);