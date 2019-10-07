var heading = document.querySelector("h1.gleaming");
var letters = heading.textContent.split("");
heading.textContent = "";
letters.forEach(function (letter) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = _.random(1, 1000) + "ms";
    heading.append(span);
});