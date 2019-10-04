let heading = document.querySelector("h1.gleaming");
let letters = heading.textContent.split("");
let delayedLetters = letters.map(
  e => `<span style='animation-delay: ${_.random(1, 1000)}ms'>${e}</span>`
);
heading.innerHTML = delayedLetters.join("");
