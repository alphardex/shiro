let loading = document.querySelector(".loading");
let letters = loading.textContent.split("");
let delayedLetters = letters.map(
  (e, i) => `<span style='animation-delay: ${i / 5}s'>${e}</span>`
);
loading.innerHTML = delayedLetters.join("");
