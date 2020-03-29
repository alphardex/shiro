"use strict";
var chars = document.querySelectorAll(".chars .char");
var result = document.querySelector(".result");
chars.forEach(function (char) {
    char.addEventListener("keyup", function (e) {
        var _a, _b;
        if (char.value.toString().length === 1 ||
            e.code === "Space") {
            (_a = char.nextElementSibling) === null || _a === void 0 ? void 0 : _a.focus();
        }
        if (e.code === "Backspace") {
            (_b = char.previousElementSibling) === null || _b === void 0 ? void 0 : _b.focus();
        }
        var value = Array.from(chars)
            .map(function (char) { return char.value; })
            .join("");
        result.setAttribute("value", value);
    });
});