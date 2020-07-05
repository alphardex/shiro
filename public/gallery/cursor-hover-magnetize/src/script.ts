let cursor = document.querySelector(".cursor");
let cursorBorder = document.querySelector(".cursor-border");
let magnetizedElements = document.querySelectorAll(".magnetize");
let threshold = 100;
let getXY = (event: Event, element: Element) => {
  let x = (event as MouseEvent).clientX;
  let y = (event as MouseEvent).clientY;
  let rect = element.getBoundingClientRect();
  x -= rect.width / 2;
  y -= rect.height / 2;
  return [x, y];
};
let calcDistance = (x1: number, x2: number, y1: number, y2: number) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
let magnetize = (event: Event, element: Element) => {
  let x1 = (event as MouseEvent).clientX;
  let y1 = (event as MouseEvent).clientY;
  let rect = element.getBoundingClientRect();
  let x2 = rect.left + rect.width / 2;
  let y2 = rect.top + rect.height / 2;
  let dx = Math.floor(x2 - x1);
  let dy = Math.floor(y2 - y1);
  let h = -0.45 * dx;
  let v = -0.45 * dy;
  let distance = calcDistance(x1, x2, y1, y2);
  if (distance < threshold) {
    (element as HTMLElement).style.setProperty("--t", `0`);
    (element as HTMLElement).style.setProperty("--h", `${h}px`);
    (element as HTMLElement).style.setProperty("--v", `${v}px`);
  } else {
    (element as HTMLElement).style.removeProperty("--t");
    (element as HTMLElement).style.setProperty("--h", `0`);
    (element as HTMLElement).style.setProperty("--v", `0`);
  }
};

document.addEventListener("mouseenter", (e) => {
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

document.addEventListener("mousemove", (e) => {
  magnetizedElements.forEach((el) => magnetize(e, el));
  let [cursorX, cursorY] = getXY(e, cursor);
  let [cursorBorderX, cursorBorderY] = getXY(e, cursorBorder);
  if ((e.target as HTMLElement).tagName === "A") {
    cursorBorder.classList.add("on-focus");
  } else {
    cursorBorder.classList.remove("on-focus");
  }
  cursor.animate(
    [
      { transform: `translate(${cursorX}px, ${cursorY}px)` },
      { transform: `translate(${cursorX}px, ${cursorY}px)` }
    ],
    {
      duration: 300,
      fill: "forwards",
      delay: 50
    }
  );
  cursorBorder.animate(
    [
      { transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` },
      { transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` }
    ],
    {
      duration: cursorBorder.classList.contains("on-focus") ? 1500 : 300,
      fill: "forwards",
      delay: 150
    }
  );
});

document.addEventListener("mouseleave", (e) => {
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
