let sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));
let dropdown = document.querySelector(".dropdown");
let oldText = document.querySelector(".old-text");
let newText = document.querySelector(".new-text");
let dropdownOptions = document.querySelectorAll(".dropdown__options li");
dropdown.addEventListener("click", async () => {
  if (!dropdown.classList.contains("open")) {
    dropdown.classList.add("open");
  } else {
    dropdown.classList.add("close");
    await sleep(600);
    dropdown.className = "dropdown";
    (oldText as HTMLElement).textContent = (newText as HTMLElement).dataset.text;
  }
});
dropdownOptions.forEach(option => {
  option.addEventListener("click", e => {
    let selected = e.target;
    (newText as HTMLElement).dataset.text = (selected as HTMLElement).textContent;
    dropdownOptions.forEach(option => option.classList.remove("selected"));
    (selected as HTMLElement).classList.add("selected");
  });
});
