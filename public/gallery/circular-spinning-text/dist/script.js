var offsetRadiusStep = 2.5;
var circularTexts = document.querySelectorAll(".circular");
circularTexts.forEach(function (circularText) {
    var letters = circularText.textContent.split("");
    var total = letters.length;
    circularText.style.setProperty("--total", "" + total);
    circularText.textContent = "";
    letters.forEach(function (letter, i) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.style.setProperty("--i", "" + i);
        var offsetRadius = offsetRadiusStep * total;
        var offsetPath = "path('M 0," + offsetRadius + " a " + offsetRadius + "," + offsetRadius + " 0 1,1 0,1 z')";
        span.style.setProperty("--offset-path", offsetPath);
        circularText.append(span);
    });
});