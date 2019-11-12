let splitMenuLinks = document.querySelectorAll(".split-menu li a");
splitMenuLinks.forEach(link => {
  let words = link.textContent.split(" ");
  link.textContent = "";
  let [primaryWord, secondaryWord] = words;
  let primarySpan = document.createElement("span");
  primarySpan.textContent = primaryWord;
  primarySpan.className = "primary";
  primarySpan.dataset.text = primaryWord;
  link.append(primarySpan);
  let secondarySpan = document.createElement("span");
  secondarySpan.textContent = secondaryWord;
  secondarySpan.className = "secondary";
  secondarySpan.dataset.text = secondaryWord;
  link.append(secondarySpan);
});
