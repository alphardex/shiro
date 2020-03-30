let sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));
let cardItems = document.querySelectorAll(".card-item");
let deleteBtns = document.querySelectorAll(".card-item__delete");
deleteBtns.forEach((btn, i) => {
  btn.addEventListener("click", async () => {
    let cardItem = cardItems[i];
    cardItem.classList.add("deleted");
    await sleep(800);
    cardItem.classList.add("removed");
    await sleep(300);
    cardItem.remove();
  });
});
