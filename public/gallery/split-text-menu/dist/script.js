"use strict";
var splitMenuLinks = document.querySelectorAll(".split-menu li a");
splitMenuLinks.forEach(function (link) {
    var words = link.textContent.split(" ");
    link.textContent = "";
    var primaryWord = words[0], secondaryWord = words[1];
    var primarySpan = document.createElement("span");
    primarySpan.textContent = primaryWord;
    primarySpan.className = "primary";
    primarySpan.dataset.text = primaryWord;
    link.append(primarySpan);
    var secondarySpan = document.createElement("span");
    secondarySpan.textContent = secondaryWord;
    secondarySpan.className = "secondary";
    secondarySpan.dataset.text = secondaryWord;
    link.append(secondarySpan);
});