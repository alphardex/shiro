const random = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));
let heading = document.querySelector("h1.gleaming");
let letters = heading.textContent.split("");
heading.textContent = "";
letters.forEach(letter => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${random(1, 1000)}ms`;
  heading.append(span);
});
