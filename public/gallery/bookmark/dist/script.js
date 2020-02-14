"use strict";
var bookmark = document.querySelector(".bookmark");
bookmark.addEventListener("click", function () {
    bookmark.classList.toggle("marked");
});