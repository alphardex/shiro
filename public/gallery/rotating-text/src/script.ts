let words = document.querySelectorAll(".word");
words.forEach(word => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
(words[currentWordIndex] as HTMLElement).style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  for (let i = 0; i < currentWord.children.length; i++) {
    setTimeout(() => {
      currentWord.children[i].className = "letter out";
    }, i * 80);
  }
  for (let i = 0; i < nextWord.children.length; i++) {
    nextWord.children[i].className = "letter behind";
    (nextWord as HTMLElement).style.opacity = "1";
    setTimeout(() => {
      nextWord.children[i].className = "letter in";
    }, 340 + i * 80);
  }
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);
