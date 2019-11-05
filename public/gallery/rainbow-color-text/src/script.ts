let rainbowText = document.querySelector(".rainbow");
let letters = rainbowText.textContent.split("");
rainbowText.textContent = "";
letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${-20 + i * 0.2}s`;
  rainbowText.append(span);
});
