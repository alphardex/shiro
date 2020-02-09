let staggeredBarCrossTexts = document.querySelectorAll(".staggered-bar-cross");
staggeredBarCrossTexts.forEach(staggeredBarCrossText => {
  let content = staggeredBarCrossText.textContent;
  staggeredBarCrossText.textContent = "";
  let text = document.createElement("div");
  text.className = "text";
  text.textContent = content;
  staggeredBarCrossText.append(text);
  let bars = document.createElement("div");
  bars.className = "bars";
  for (let i = 0; i < 5; i++) {
    let bar = document.createElement("div");
    bar.className = "bar";
    bars.append(bar);
  }
  staggeredBarCrossText.append(bars);
});
