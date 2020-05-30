"use strict";
var staggeredFlipInTexts = document.querySelectorAll(".staggered-flip-in");
staggeredFlipInTexts.forEach(function (text) {
    var letters = text.textContent.split("");
    text.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = i / 10 + "s";
        text.append(span);
    });
});