"use strict";
var random = function (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};
var crossBarGlitchTexts = document.querySelectorAll(".cross-bar-glitch");
crossBarGlitchTexts.forEach(function (text) {
    var content = text.textContent;
    text.textContent = "";
    // Glitch Text
    var slice = text.dataset.slice;
    var glitchText = document.createElement("div");
    glitchText.className = "glitch";
    glitchText.style.setProperty("--slice-count", slice);
    for (var i = 0; i <= Number(slice); i++) {
        var span = document.createElement("span");
        span.textContent = content;
        span.style.setProperty("--i", "" + (i + 1));
        if (i !== Number(slice)) {
            span.style.animationDelay = 800 + random(100, 300) + "ms";
        }
        glitchText.append(span);
    }
    text.appendChild(glitchText);
    // Cross Bars
    var bars = document.createElement("div");
    bars.className = "bars";
    for (var i = 0; i < 5; i++) {
        var bar = document.createElement("div");
        bar.className = "bar";
        bars.append(bar);
    }
    text.append(bars);
});