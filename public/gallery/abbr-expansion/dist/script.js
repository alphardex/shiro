var abbr = document.querySelector("abbr");
abbr.textContent = "";
var title = abbr.dataset.title;
var words = title.split(" ");
words.forEach(function (word) {
    var _a = word.split(""), initial = _a[0], restLetters = _a.slice(1);
    var initialSpan = document.createElement("span");
    initialSpan.textContent = initial;
    initialSpan.className = "initial";
    abbr.append(initialSpan);
    restLetters.forEach(function (letter) {
        var hiddenSpan = document.createElement("span");
        hiddenSpan.textContent = letter;
        hiddenSpan.className = "hidden";
        abbr.append(hiddenSpan);
    });
});