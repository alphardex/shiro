"use strict";
// Header Underline https://codepen.io/alphardex/pen/JjoqbNP
var underlineMenuItems = document.querySelectorAll(".underline li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});
// Cursor Follow & Hover Effect https://codepen.io/alphardex/pen/jOEgYjr
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
            opacity: 0.8
        }
    ], {
        duration: 300,
        fill: "forwards"
    });
});
document.addEventListener("mousemove", function (e) {
    var _a = getXY(e, cursor), cursorX = _a[0], cursorY = _a[1];
    var _b = getXY(e, cursorBorder), cursorBorderX = _b[0], cursorBorderY = _b[1];
    var targetName = e.target.tagName;
    if (targetName === "A" || targetName === "LI" || targetName === "BUTTON") {
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
    cursor.animate([{ opacity: 0.8 }, { opacity: 0 }], {
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
// Gleaming Heading https://codepen.io/alphardex/pen/rNBrExx
var random = function (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};
var heading = document.querySelector("h1.gleaming");
var letters = heading.textContent.split("");
heading.textContent = "";
letters.forEach(function (letter) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = random(1, 1000) + "ms";
    heading.append(span);
});
// Staggered Rise In Text https://codepen.io/alphardex/pen/qBEmGbw
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
// Observe the elements which have animations to fire.
var observer = new IntersectionObserver(function (entries) {
    console.log(entries);
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});
var titles = document.querySelectorAll(".titles > *");
titles.forEach(function (title) { return observer.observe(title); });
var paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (p) { return observer.observe(p); });