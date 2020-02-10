"use strict";
var random = function (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};
var glitchTexts = document.querySelectorAll(".glitch");
glitchTexts.forEach(function (text) {
    var content = text.textContent;
    text.textContent = "";
    var slice = text.dataset.slice;
    text.style.setProperty("--slice-count", slice);
    for (var i = 0; i <= Number(slice); i++) {
        var span = document.createElement("span");
        span.textContent = content;
        span.style.setProperty("--i", "" + (i + 1));
        if (i !== Number(slice)) {
            span.style.animationDelay = random(100, 300) + "ms";
        }
        text.append(span);
    }
});