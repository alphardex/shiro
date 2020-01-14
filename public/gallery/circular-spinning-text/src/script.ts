let offsetRadiusStep = 2.5;
let circularTexts = document.querySelectorAll(".circular");
circularTexts.forEach(circularText => {
  let letters = circularText.textContent.split("");
  let total = letters.length;
  (circularText as HTMLElement).style.setProperty("--total", `${total}`);
  circularText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.setProperty("--i", `${i}`);
    let offsetRadius = offsetRadiusStep * total;
    let offsetPath = `path('M 0,${offsetRadius} a ${offsetRadius},${offsetRadius} 0 1,1 0,1 z')`;
    span.style.setProperty("--offset-path", offsetPath);
    circularText.append(span);
  });
});
