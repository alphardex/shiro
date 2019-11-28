var words = document.querySelectorAll(".word");
words.forEach(function (word) {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function () {
    var currentWord = words[currentWordIndex];
    var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    var _loop_1 = function (i) {
        setTimeout(function () {
            currentWord.children[i].className = "letter out";
        }, i * 80);
    };
    for (var i = 0; i < currentWord.children.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        nextWord.children[i].className = "letter behind";
        nextWord.style.opacity = "1";
        setTimeout(function () {
            nextWord.children[i].className = "letter in";
        }, 340 + i * 80);
    };
    for (var i = 0; i < nextWord.children.length; i++) {
        _loop_2(i);
    }
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);