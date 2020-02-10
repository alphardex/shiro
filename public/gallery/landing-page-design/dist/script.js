"use strict";
// Header Underline https://codepen.io/alphardex/pen/JjoqbNP
var underlineMenuItems = document.querySelectorAll(".underline-menu li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});
// Full Page Burger Navigation https://codepen.io/alphardex/pen/NWPBwYe
var burgerMenuToggle = document.querySelector("#burger-toggle");
var burgerMenuLinks = document.querySelectorAll(".burger-nav li a");
burgerMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        burgerMenuToggle.checked = false;
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
    if (targetName === "A" || targetName === "LABEL" || targetName === "BUTTON") {
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
            opacity: 0.8
        },
        {
            opacity: 0
        }
    ], {
        duration: 500,
        fill: "forwards"
    });
});
// Staggered Bar Cross Text https://codepen.io/alphardex/pen/eYNmYjL
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
    var barCount = staggeredBarCrossText.dataset.barCount;
    for (var i = 0; i < 5; i++) {
        var bar = document.createElement("div");
        bar.className = "bar";
        bars.append(bar);
    }
    staggeredBarCrossText.append(bars);
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
// Glitch Text Reveal https://codepen.io/alphardex/pen/ExjjYOv
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
// Observe the elements which have animations to fire.
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});
var logoText = document.querySelector(".logo-text");
observer.observe(logoText);
var heroTitles = document.querySelectorAll(".hero-title");
heroTitles.forEach(function (heroTitle) { return observer.observe(heroTitle); });
var titles = document.querySelectorAll(".titles > *");
titles.forEach(function (title) { return observer.observe(title); });
var paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (p) { return observer.observe(p); });
var profileCards = document.querySelectorAll(".card");
profileCards.forEach(function (profileCard) { return observer.observe(profileCard); });
var timeline = document.querySelector(".timeline");
observer.observe(timeline);
var marker = document.querySelector(".marker");
observer.observe(marker);
var placeName = document.querySelector(".place-name");
observer.observe(placeName);
var map = document.querySelector("#map");
observer.observe(map);
var sponsorList = document.querySelectorAll(".sponsors-list li");
sponsorList.forEach(function (sponsor) { return observer.observe(sponsor); });
// Baidu Map API
var bmap = new BMap.Map("map");
var point = new BMap.Point(113.950148, 22.553891);
bmap.centerAndZoom(point, 18);