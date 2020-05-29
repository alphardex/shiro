let d = document.querySelector("#path").children[0].getAttribute("d");
let stage = document.querySelector(".stage");
stage.style.setProperty("--d", `path('${d}')`);
let goForthBtn = document.querySelector("#go-forth");
let hero = document.querySelector(".hero");
let currentCheckPointId = 0;
goForthBtn.addEventListener("click", () => {
  currentCheckPointId++;
  if (currentCheckPointId <= 5) {
    hero.classList.add(`check-${currentCheckPointId}`);
  }
});