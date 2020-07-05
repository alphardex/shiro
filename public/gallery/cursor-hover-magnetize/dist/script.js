"use strict";
var cursor = document.querySelector(".cursor");
var cursorBorder = document.querySelector(".cursor-border");
var magnetizedElements = document.querySelectorAll(".magnetize");
var threshold = 100;
var getXY = function (event, element) {
    var x = event.clientX;
    var y = event.clientY;
    var rect = element.getBoundingClientRect();
    x -= rect.width / 2;
    y -= rect.height / 2;
    return [x, y];
};
var calcDistance = function (x1, x2, y1, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};
var magnetize = function (event, element) {
    var x1 = event.clientX;
    var y1 = event.clientY;
    var rect = element.getBoundingClientRect();
    var x2 = rect.left + rect.width / 2;
    var y2 = rect.top + rect.height / 2;
    var dx = Math.floor(x2 - x1);
    var dy = Math.floor(y2 - y1);
    var h = -0.45 * dx;
    var v = -0.45 * dy;
    var distance = calcDistance(x1, x2, y1, y2);
    if (distance < threshold) {
        element.style.setProperty("--t", "0");
        element.style.setProperty("--h", h + "px");
        element.style.setProperty("--v", v + "px");
    }
    else {
        element.style.removeProperty("--t");
        element.style.setProperty("--h", "0");
        element.style.setProperty("--v", "0");
    }
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
    magnetizedElements.forEach(function (el) { return magnetize(e, el); });
    var _a = getXY(e, cursor), cursorX = _a[0], cursorY = _a[1];
    var _b = getXY(e, cursorBorder), cursorBorderX = _b[0], cursorBorderY = _b[1];
    if (e.target.tagName === "A") {
        cursorBorder.classList.add("on-focus");
    }
    else {
        cursorBorder.classList.remove("on-focus");
    }
    cursor.animate([
        { transform: "translate(" + cursorX + "px, " + cursorY + "px)" },
        { transform: "translate(" + cursorX + "px, " + cursorY + "px)" }
    ], {
        duration: 300,
        fill: "forwards",
        delay: 50
    });
    cursorBorder.animate([
        { transform: "translate(" + cursorBorderX + "px, " + cursorBorderY + "px)" },
        { transform: "translate(" + cursorBorderX + "px, " + cursorBorderY + "px)" }
    ], {
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