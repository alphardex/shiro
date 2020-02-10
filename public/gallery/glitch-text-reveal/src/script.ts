const random = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));
let glitchTexts = document.querySelectorAll(".glitch");
glitchTexts.forEach(text => {
  let content = text.textContent;
  text.textContent = "";
  let slice = (text as HTMLElement).dataset.slice;
  (text as HTMLElement).style.setProperty("--slice-count", slice);
  for (let i = 0; i <= Number(slice); i++) {
    let span = document.createElement("span");
    span.textContent = content;
    span.style.setProperty("--i", `${i + 1}`);
    if (i !== Number(slice)) {
      span.style.animationDelay = `${random(100, 300)}ms`;
    }
    text.append(span);
  }
});
