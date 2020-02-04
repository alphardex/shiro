// Header Underline https://codepen.io/alphardex/pen/JjoqbNP
let underlineMenuItems = document.querySelectorAll(".underline li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    underlineMenuItems.forEach(item => item.classList.remove("active"));
    item.classList.add("active");
  });
});

// Cursor Follow & Hover Effect https://codepen.io/alphardex/pen/jOEgYjr
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
        opacity: 0.8
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
  let targetName = (e.target as HTMLElement).tagName;
  if (targetName === "A" || targetName === "LI" || targetName === "BUTTON") {
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
  cursor.animate([{ opacity: 0.8 }, { opacity: 0 }], {
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

// Gleaming Heading https://codepen.io/alphardex/pen/rNBrExx
const random = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));
let heading = document.querySelector("h1.gleaming");
let letters = heading.textContent.split("");
heading.textContent = "";
letters.forEach(letter => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${random(1, 1000)}ms`;
  heading.append(span);
});

// Staggered Rise In Text https://codepen.io/alphardex/pen/qBEmGbw
let titles = document.querySelectorAll(".titles > *");
titles.forEach(text => {
  let letters = text.textContent.split("");
  text.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i / 20}s`;
    text.append(span);
  });
});

// Observe the elements which have animations to fire.
let observer = new IntersectionObserver(entries => {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});
titles.forEach(title => observer.observe(title));
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => observer.observe(p));
