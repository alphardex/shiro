var cursor = document.querySelector(".cursor");
var getXY = function (e) { return [
    e.clientX,
    e.clientY
]; };
document.addEventListener("mouseenter", function (e) {
    var _a = getXY(e), x = _a[0], y = _a[1];
    cursor.animate([
        { transform: "translate(" + x + "px, " + y + "px) scale(0)" },
        { transform: "translate(" + x + "px, " + y + "px) scale(1)" }
    ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-out"
    });
});
document.addEventListener("mousemove", function (e) {
    var _a = getXY(e), x = _a[0], y = _a[1];
    cursor.animate([{ transform: "translate(" + x + "px, " + y + "px)" }], {
        duration: 500,
        fill: "forwards"
    });
});
document.addEventListener("mouseleave", function (e) {
    var _a = getXY(e), x = _a[0], y = _a[1];
    cursor.animate([
        { transform: "translate(" + x + "px, " + y + "px) scale(1)" },
        { transform: "translate(" + x + "px, " + y + "px) scale(0)" }
    ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-out"
    });
});