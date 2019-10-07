let heading = document.querySelector("h1.gleaming");
let letters = heading.textContent.split("");
heading.textContent = "";
letters.forEach(letter => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${_.random(1, 1000)}ms`;
  heading.append(span);
});
