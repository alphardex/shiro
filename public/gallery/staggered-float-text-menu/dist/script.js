var floatTextMenuLinks = document.querySelectorAll(".float-text-menu li a");
floatTextMenuLinks.forEach(function (link) {
    var letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.transitionDelay = i / 20 + "s";
        span.dataset.text = letter;
        link.append(span);
    });
});