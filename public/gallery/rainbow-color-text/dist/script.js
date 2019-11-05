var rainbowText = document.querySelector(".rainbow");
var letters = rainbowText.textContent.split("");
rainbowText.textContent = "";
letters.forEach(function (letter, i) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = -20 + i * 0.2 + "s";
    rainbowText.append(span);
});