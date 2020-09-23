const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const glitchBtn = document.querySelector(".btn-glitch");
glitchBtn.addEventListener("click", async () => {
  glitchBtn.classList.add("glitch");
  await sleep(600);
  glitchBtn.classList.remove("glitch");
});