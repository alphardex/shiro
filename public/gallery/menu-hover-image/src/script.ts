let menuItems = document.querySelectorAll(".menu-hover-image .menu-item");
let cursor = document.querySelector(".menu-hover-image .cursor");
let getXY = (e: Event) => [
  (e as MouseEvent).clientX,
  (e as MouseEvent).clientY
];

menuItems.forEach(menuItem => {
  // use mouseenter and mouseleave to toggle cursor since they won't bubble!
  menuItem.addEventListener("mouseenter", e => {
    let [x, y] = getXY(e);
    cursor.animate(
      [
        {
          opacity: 0,
          transform: `translate(${x}px, ${y}px) scale(0)`
        },
        {
          opacity: 1,
          transform: `translate(${x}px, ${y}px) scale(1)`
        }
      ],
      { duration: 300, fill: "forwards" }
    );
    menuItem.addEventListener("mouseleave", e => {
      let [x, y] = getXY(e);
      cursor.animate(
        [
          {
            opacity: 1,
            transform: `translate(${x}px, ${y}px) scale(1)`
          },
          {
            opacity: 0,
            transform: `translate(${x}px, ${y}px) scale(0)`
          }
        ],
        { duration: 300, fill: "forwards" }
      );
    });
  });
  // move the cursor when mouse moves.
  menuItem.addEventListener("mousemove", e => {
    let [x, y] = getXY(e);
    cursor.animate(
      [
        {
          transform: `translate(${x}px, ${y}px)`
        }
      ],
      { duration: 500, delay: 50, fill: "forwards" }
    );
  });
});
