let headerTexts = document.querySelectorAll("header > *");
headerTexts.forEach(headerText => {
  let letters = headerText.textContent.split("");
  headerText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 20}s`;
    headerText.append(span);
  });
});
