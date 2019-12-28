var shinchouMenuLinks = document.querySelectorAll(".shinchou-menu li a");
shinchouMenuLinks.forEach(function (link) {
    var letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        if (i < 2) {
            span.className = "highlight";
        }
        span.style.transitionDelay = i / 10 + "s";
        link.append(span);
    });
});