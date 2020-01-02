let cursor = document.querySelector(".cursor");
let getXY = (e: Event) => [
  (e as MouseEvent).clientX,
  (e as MouseEvent).clientY
];

document.addEventListener("mouseenter", e => {
  let [x, y] = getXY(e);
  cursor.animate(
    [
      { transform: `translate(${x}px, ${y}px) scale(0)` },
      { transform: `translate(${x}px, ${y}px) scale(1)` }
    ],
    {
      duration: 300,
      fill: "forwards",
      easing: "ease-out"
    }
  );
});

document.addEventListener("mousemove", e => {
  let [x, y] = getXY(e);
  cursor.animate([{ transform: `translate(${x}px, ${y}px)` }], {
    duration: 500,
    fill: "forwards"
  });
});

document.addEventListener("mouseleave", e => {
  let [x, y] = getXY(e);
  cursor.animate(
    [
      { transform: `translate(${x}px, ${y}px) scale(1)` },
      { transform: `translate(${x}px, ${y}px) scale(0)` }
    ],
    {
      duration: 300,
      fill: "forwards",
      easing: "ease-out"
    }
  );
});
