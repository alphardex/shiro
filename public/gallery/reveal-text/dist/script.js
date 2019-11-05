var duration = 0.8;
var delay = 0.3;
var revealText = document.querySelector(".reveal");
var letters = revealText.textContent.split("");
revealText.textContent = "";
var middle = letters.filter(function (e) { return e !== " "; }).length / 2;
letters.forEach(function (letter, i) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = delay + Math.abs(i - middle) * 0.1 + "s";
    revealText.append(span);
});