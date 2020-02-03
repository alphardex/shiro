let cursor = document.querySelector(".cursor");
let cursorBorder = document.querySelector(".cursor-border");
let getXY = (event: Event, element: Element) => {
  let x = (event as MouseEvent).clientX;
  let y = (event as MouseEvent).clientY;
  let rect = element.getBoundingClientRect();
  x -= rect.width / 2;
  y -= rect.height / 2;
  return [x, y];
};

document.addEventListener("mouseenter", e => {
  cursor.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards"
  });
  cursorBorder.animate(
    [
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    ],
    {
      duration: 300,
      fill: "forwards"
    }
  );
});

document.addEventListener("mousemove", e => {
  let [cursorX, cursorY] = getXY(e, cursor);
  let [cursorBorderX, cursorBorderY] = getXY(e, cursorBorder);
  if ((e.target as HTMLElement).tagName === "A") {
    cursorBorder.classList.add("on-focus");
  } else {
    cursorBorder.classList.remove("on-focus");
  }
  cursor.animate([{ transform: `translate(${cursorX}px, ${cursorY}px)` }], {
    duration: 300,
    fill: "forwards",
    delay: 50
  });
  cursorBorder.animate(
    [{ transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` }],
    {
      duration: cursorBorder.classList.contains("on-focus") ? 1500 : 300,
      fill: "forwards",
      delay: 150
    }
  );
});

document.addEventListener("mouseleave", e => {
  cursor.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 500,
    fill: "forwards"
  });
  cursorBorder.animate(
    [
      {
        opacity: 1
      },
      {
        opacity: 0
      }
    ],
    {
      duration: 500,
      fill: "forwards"
    }
  );
});
