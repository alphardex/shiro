var landInTexts = document.querySelectorAll(".landIn");
landInTexts.forEach(function (landInText) {
    var letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = i * 0.05 + "s";
        landInText.append(span);
    });
});