// For a better performance, use requestAnimationFrame instead of setInterval
// https://css-tricks.com/snippets/javascript/replacements-setinterval-using-requestanimationframe/
var requestInterval = function (fn, delay) {
    var start = new Date().getTime();
    var handle = { value: 0 };
    var loop = function () {
        handle.value = requestAnimationFrame(loop);
        var current = new Date().getTime();
        var delta = current - start;
        if (delta >= delay) {
            fn();
            start = new Date().getTime();
        }
    };
    handle.value = requestAnimationFrame(loop);
    return handle;
};
var bubbleSizes = [3, 6, 9, 12];
var bubbleText = document.querySelector(".bubbling");
var bubblePositions = Array.from(Array(bubbleText.offsetWidth).keys());
requestInterval(function () {
    var bubbleSize = _.sample(bubbleSizes);
    var bubblePosition = _.sample(bubblePositions);
    var bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.width = bubbleSize + "px";
    bubble.style.height = bubbleSize + "px";
    bubble.style.left = bubblePosition + "px";
    bubbleText.append(bubble);
    var bubbleAnimation = bubble.animate([{ bottom: "10px", opacity: 1 }, { bottom: "180%", opacity: 0.6 }], {
        fill: "forwards",
        duration: 3000
    });
    bubbleAnimation.onfinish = function () { return bubble.remove(); };
}, 300);