let sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));
let btn = document.querySelector(".login");
btn.addEventListener("click", async () => {
  btn.classList.add("loading");
  await sleep(3000);
  btn.classList.add("success");
});
