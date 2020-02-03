"use strict";
var cursor = document.querySelector(".cursor");
var cursorBorder = document.querySelector(".cursor-border");
var getXY = function (event, element) {
    var x = event.clientX;
    var y = event.clientY;
    var rect = element.getBoundingClientRect();
    x -= rect.width / 2;
    y -= rect.height / 2;
    return [x, y];
};
document.addEventListener("mouseenter", function (e) {
    cursor.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        fill: "forwards"
    });
    cursorBorder.animate([
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ], {
        duration: 300,
        fill: "forwards"
    });
});
document.addEventListener("mousemove", function (e) {
    var _a = getXY(e, cursor), cursorX = _a[0], cursorY = _a[1];
    var _b = getXY(e, cursorBorder), cursorBorderX = _b[0], cursorBorderY = _b[1];
    if (e.target.tagName === "A") {
        cursorBorder.classList.add("on-focus");
    }
    else {
        cursorBorder.classList.remove("on-focus");
    }
    cursor.animate([{ transform: "translate(" + cursorX + "px, " + cursorY + "px)" }], {
        duration: 300,
        fill: "forwards",
        delay: 50
    });
    cursorBorder.animate([{ transform: "translate(" + cursorBorderX + "px, " + cursorBorderY + "px)" }], {
        duration: cursorBorder.classList.contains("on-focus") ? 1500 : 300,
        fill: "forwards",
        delay: 150
    });
});
document.addEventListener("mouseleave", function (e) {
    cursor.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 500,
        fill: "forwards"
    });
    cursorBorder.animate([
        {
            opacity: 1
        },
        {
            opacity: 0
        }
    ], {
        duration: 500,
        fill: "forwards"
    });
});