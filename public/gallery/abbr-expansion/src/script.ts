let abbr = document.querySelector("abbr");
abbr.textContent = "";
let title = abbr.dataset.title;
let words = title.split(" ");
words.forEach(word => {
  let [initial, ...restLetters] = word.split("");
  let initialSpan = document.createElement("span");
  initialSpan.textContent = initial;
  initialSpan.className = "initial";
  abbr.append(initialSpan);
  restLetters.forEach(letter => {
    let hiddenSpan = document.createElement("span");
    hiddenSpan.textContent = letter;
    hiddenSpan.className = "hidden";
    abbr.append(hiddenSpan);
  });
});
