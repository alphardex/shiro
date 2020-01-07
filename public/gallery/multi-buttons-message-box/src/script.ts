let card = document.querySelector(".card");
let hintText = document.querySelector(".card .hint h2");
let textArea = document.querySelector(".card .textarea");
let buttons = document.querySelectorAll(".card .btn");
let cutButton = buttons[0];
let copyButton = buttons[1];
let pasteButton = buttons[2];
let sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

async function onCutButton() {
  (cutButton as HTMLElement).style.pointerEvents = "none";
  card.classList.add("active");
  card.classList.add("cut");
  hintText.textContent = "Cut!";
  await sleep(1000);
  (textArea as HTMLInputElement).select();
  document.execCommand("Cut");
  card.classList.add("inactive");
  await sleep(500);
  card.className = "card";
  hintText.textContent = "";
  (cutButton as HTMLElement).style.pointerEvents = "auto";
}

async function onCopyButton() {
  (copyButton as HTMLElement).style.pointerEvents = "none";
  card.classList.add("active");
  card.classList.add("copy");
  hintText.textContent = "Copied!";
  await sleep(1000);
  (textArea as HTMLInputElement).select();
  document.execCommand("Copy");
  card.classList.add("inactive");
  await sleep(500);
  card.className = "card";
  hintText.textContent = "";
  (copyButton as HTMLElement).style.pointerEvents = "auto";
}

async function onPasteButton() {
  (pasteButton as HTMLElement).style.pointerEvents = "none";
  card.classList.add("active");
  card.classList.add("paste");
  hintText.textContent = "Pasted!";
  await sleep(1000);
  navigator.clipboard
    .readText()
    .then(clipText => ((textArea as HTMLInputElement).value += clipText));
  card.classList.add("inactive");
  await sleep(500);
  card.className = "card";
  hintText.textContent = "";
  (pasteButton as HTMLElement).style.pointerEvents = "auto";
}

cutButton.addEventListener("click", onCutButton);

copyButton.addEventListener("click", onCopyButton);

pasteButton.addEventListener("click", onPasteButton);
