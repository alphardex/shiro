var headerTexts = document.querySelectorAll("header > *");
headerTexts.forEach(function (headerText) {
    var letters = headerText.textContent.split("");
    headerText.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = i / 20 + "s";
        headerText.append(span);
    });
});