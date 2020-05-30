let staggeredFlipInTexts = document.querySelectorAll(".staggered-flip-in");
staggeredFlipInTexts.forEach(text => {
  let letters = text.textContent.split("");
  text.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 10}s`;
    text.append(span);
  });
});