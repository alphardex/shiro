const colorStopMap = {
  green: 0,
  blue: 20,
  yellow: 40,
  crimson: 60
};
let gradientRange = document.querySelector(".gradient-range");
gradientRange.classList.add(Object.entries(colorStopMap)[0][0]);
gradientRange.addEventListener("input", () => {
  for (const colorStop of Object.entries(colorStopMap)) {
    let [colorClass, colorStopValue] = colorStop;
    if (Number((gradientRange as HTMLInputElement).value) >= colorStopValue) {
      gradientRange.classList.add(colorClass);
    } else {
      gradientRange.classList.remove(colorClass);
    }
  }
});
