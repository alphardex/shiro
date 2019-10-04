var abbrs = document.querySelectorAll("abbr");
abbrs.forEach(function (abbr) {
    var title = abbr.dataset.title;
    var words = title.split(" ");
    var expandableWords = words.map(function (e, i) {
        var _a = e.split(""), initial = _a[0], rest = _a.slice(1);
        var initialSpan = "<span class=\"initial\">" + initial + "</span>";
        var hiddenRestSpans = rest.map(function (e) { return "<span class=\"hidden\">" + e + "</span>"; });
        return "" + initialSpan + hiddenRestSpans.join("");
    });
    abbr.innerHTML = expandableWords.join("");
});