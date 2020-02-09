"use strict";
var staggeredBarCrossTexts = document.querySelectorAll(".staggered-bar-cross");
staggeredBarCrossTexts.forEach(function (staggeredBarCrossText) {
    var content = staggeredBarCrossText.textContent;
    staggeredBarCrossText.textContent = "";
    var text = document.createElement("div");
    text.className = "text";
    text.textContent = content;
    staggeredBarCrossText.append(text);
    var bars = document.createElement("div");
    bars.className = "bars";
    for (var i = 0; i < 5; i++) {
        var bar = document.createElement("div");
        bar.className = "bar";
        bars.append(bar);
    }
    staggeredBarCrossText.append(bars);
});