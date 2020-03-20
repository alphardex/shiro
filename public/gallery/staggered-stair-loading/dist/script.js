"use strict";
var loading = document.querySelector(".loading");
var letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach(function (letter, i) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = i / 5 + "s";
    loading.append(span);
});