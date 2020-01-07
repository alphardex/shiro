let card = document.querySelector(".card");
let textarea = document.querySelector(".card .textarea");
let sendButton = document.querySelector("#send");
sendButton.addEventListener("click", () => {
  if ((textarea as HTMLInputElement).checkValidity()) {
    card.classList.add("sent");
  }
});
