// Header Underline https://codepen.io/alphardex/pen/JjoqbNP
let underlineMenuItems = document.querySelectorAll(".underline-menu li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    underlineMenuItems.forEach(item => item.classList.remove("active"));
    item.classList.add("active");
  });
});

// Full Page Burger Navigation https://codepen.io/alphardex/pen/NWPBwYe
let burgerMenuToggle = document.querySelector("#burger-toggle");
let burgerMenuLinks = document.querySelectorAll(".burger-nav li a");
burgerMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    (burgerMenuToggle as HTMLInputElement).checked = false;
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
  if (targetName === "A" || targetName === "LABEL" || targetName === "BUTTON") {
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
        opacity: 0.8
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

// Staggered Bar Cross Text https://codepen.io/alphardex/pen/eYNmYjL
let staggeredBarCrossTexts = document.querySelectorAll(".staggered-bar-cross");
staggeredBarCrossTexts.forEach(staggeredBarCrossText => {
  let content = staggeredBarCrossText.textContent;
  staggeredBarCrossText.textContent = "";
  let text = document.createElement("div");
  text.className = "text";
  text.textContent = content;
  staggeredBarCrossText.append(text);
  let bars = document.createElement("div");
  bars.className = "bars";
  let barCount = (staggeredBarCrossText as HTMLElement).dataset.barCount;
  for (let i = 0; i < 5; i++) {
    let bar = document.createElement("div");
    bar.className = "bar";
    bars.append(bar);
  }
  staggeredBarCrossText.append(bars);
});

// Staggered Rise In Text https://codepen.io/alphardex/pen/qBEmGbw
let staggeredRiseInTexts = document.querySelectorAll(".staggered-rise-in");
staggeredRiseInTexts.forEach(text => {
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
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});
let titles = document.querySelectorAll(".titles > *");
titles.forEach(title => observer.observe(title));
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => observer.observe(p));
let profileCards = document.querySelectorAll(".card");
profileCards.forEach(profileCard => observer.observe(profileCard));
let timeline = document.querySelector(".timeline");
observer.observe(timeline);
let place = document.querySelector(".place");
observer.observe(place);
let map = document.querySelector("#map");
observer.observe(map);

// Baidu Map API
let bmap = new BMap.Map("map");
let point = new BMap.Point(113.950148, 22.553891);
bmap.centerAndZoom(point, 18);
