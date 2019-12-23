var menuItems = document.querySelectorAll(".menu-hover-image .menu-item");
var cursor = document.querySelector(".menu-hover-image .cursor");
var getXY = function (e) { return [
    e.clientX,
    e.clientY
]; };
menuItems.forEach(function (menuItem) {
    // use mouseenter and mouseleave to toggle cursor since they won't bubble!
    menuItem.addEventListener("mouseenter", function (e) {
        var _a = getXY(e), x = _a[0], y = _a[1];
        cursor.animate([
            {
                opacity: 0,
                transform: "translate(" + x + "px, " + y + "px) scale(0)"
            },
            {
                opacity: 1,
                transform: "translate(" + x + "px, " + y + "px) scale(1)"
            }
        ], { duration: 300, fill: "forwards" });
        menuItem.addEventListener("mouseleave", function (e) {
            var _a = getXY(e), x = _a[0], y = _a[1];
            cursor.animate([
                {
                    opacity: 1,
                    transform: "translate(" + x + "px, " + y + "px) scale(1)"
                },
                {
                    opacity: 0,
                    transform: "translate(" + x + "px, " + y + "px) scale(0)"
                }
            ], { duration: 300, fill: "forwards" });
        });
    });
    // move the cursor when mouse moves.
    menuItem.addEventListener("mousemove", function (e) {
        var _a = getXY(e), x = _a[0], y = _a[1];
        cursor.animate([
            {
                transform: "translate(" + x + "px, " + y + "px)"
            }
        ], { duration: 500, delay: 50, fill: "forwards" });
    });
});