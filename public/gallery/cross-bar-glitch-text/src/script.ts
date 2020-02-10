const random = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));
let crossBarGlitchTexts = document.querySelectorAll(".cross-bar-glitch");
crossBarGlitchTexts.forEach(text => {
  let content = text.textContent;
  text.textContent = "";
  // Glitch Text
  let slice = (text as HTMLElement).dataset.slice;
  let glitchText = document.createElement("div");
  glitchText.className = "glitch";
  (glitchText as HTMLElement).style.setProperty("--slice-count", slice);
  for (let i = 0; i <= Number(slice); i++) {
    let span = document.createElement("span");
    span.textContent = content;
    span.style.setProperty("--i", `${i + 1}`);
    if (i !== Number(slice)) {
      span.style.animationDelay = `${800 + random(100, 300)}ms`;
    }
    glitchText.append(span);
  }
  text.appendChild(glitchText);
  // Cross Bars
  let bars = document.createElement("div");
  bars.className = "bars";
  for (let i = 0; i < 5; i++) {
    let bar = document.createElement("div");
    bar.className = "bar";
    bars.append(bar);
  }
  text.append(bars);
});
