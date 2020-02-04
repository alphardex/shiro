"use strict";
var staggeredRiseInTexts = document.querySelectorAll(".staggered-rise-in");
staggeredRiseInTexts.forEach(function (text) {
    var letters = text.textContent.split("");
    text.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = i / 20 + "s";
        text.append(span);
    });
});