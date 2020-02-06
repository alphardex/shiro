"use strict";
var colorStopMap = {
    green: 0,
    blue: 20,
    yellow: 40,
    crimson: 60
};
var gradientRange = document.querySelector(".gradient-range");
gradientRange.classList.add(Object.entries(colorStopMap)[0][0]);
gradientRange.addEventListener("input", function () {
    for (var _i = 0, _a = Object.entries(colorStopMap); _i < _a.length; _i++) {
        var colorStop = _a[_i];
        var colorClass = colorStop[0], colorStopValue = colorStop[1];
        if (Number(gradientRange.value) >= colorStopValue) {
            gradientRange.classList.add(colorClass);
        }
        else {
            gradientRange.classList.remove(colorClass);
        }
    }
});