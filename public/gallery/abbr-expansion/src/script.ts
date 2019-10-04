let abbrs = document.querySelectorAll("abbr");
abbrs.forEach(abbr => {
  let title = abbr.dataset.title;
  let words = title.split(" ");
  let expandableWords = words.map((e, i) => {
    let [initial, ...rest] = e.split("");
    let initialSpan = `<span class="initial">${initial}</span>`;
    let hiddenRestSpans = rest.map(e => `<span class="hidden">${e}</span>`);
    return `${initialSpan}${hiddenRestSpans.join("")}`;
  });
  abbr.innerHTML = expandableWords.join("");
});
