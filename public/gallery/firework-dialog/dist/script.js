gsap.registerPlugin(Physics2DPlugin);
const emitters = document.querySelectorAll(".emitter");
const turn = 360;
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const makeParticles = (
  emitter,
  quantity,
  x,
  y,
  minAngle,
  maxAngle,
  minVelocity,
  maxVelocity,
  gravity
) => {
  let colors = ["#4ec0e9", "#ffce52", "#ed5464", "#8e44ad", "#2ecc71"];
  for (let i = quantity - 1; i >= 0; i--) {
    const angle = gsap.utils.random(minAngle, maxAngle);
    const velocity = gsap.utils.random(minVelocity, maxVelocity);
    const particle = document.createElement("div");
    particle.style.setProperty("--particle-color", sample(colors));
    emitter.appendChild(particle);
    gsap.set(particle, {
      opacity: 0,
      scale: gsap.utils.random(0.3, 0.8),
      x,
      y
    });
    const t1 = gsap.timeline({
      onComplete() {
        particle.remove();
      }
    });
    t1.to(
      particle,
      {
        opacity: 1,
        duration: 0.05
      },
      0
    )
      .to(
        particle,
        {
          rotationX: `+=${gsap.utils.random(2 * turn, 4 * turn)}`,
          rotationZ: `+=${gsap.utils.random(2 * turn, 4 * turn)}`,
          physics2D: {
            angle,
            velocity,
            gravity
          },
          duration: 2
        },
        0
      )
      .to(
        particle,
        {
          opacity: 0,
          duration: 1
        },
        0.8
      );
  }
};

const start = async () => {
  for (const emitter of emitters) {
    makeParticles(emitter, 100, -4, 6, 0, 360, 60, 120, 60);
    await sleep(500);
  }
};

start();