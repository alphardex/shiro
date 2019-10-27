// For a better performance, use requestAnimationFrame instead of setInterval
// https://css-tricks.com/snippets/javascript/replacements-setinterval-using-requestanimationframe/
let requestInterval = (fn: Function, delay: number) => {
  let start = new Date().getTime();
  let handle = { value: 0 };
  let loop = () => {
    handle.value = requestAnimationFrame(loop);
    let current = new Date().getTime();
    let delta = current - start;
    if (delta >= delay) {
      fn();
      start = new Date().getTime();
    }
  };
  handle.value = requestAnimationFrame(loop);
  return handle;
};

let bubbleSizes = [3, 6, 9, 12];
let bubbleText = document.querySelector(".bubbling");
let bubblePositions = Array.from(
  Array((bubbleText as HTMLElement).offsetWidth).keys()
);
requestInterval(() => {
  let bubbleSize = _.sample(bubbleSizes);
  let bubblePosition = _.sample(bubblePositions);
  let bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.width = `${bubbleSize}px`;
  bubble.style.height = `${bubbleSize}px`;
  bubble.style.left = `${bubblePosition}px`;
  bubbleText.append(bubble);
  let bubbleAnimation = bubble.animate(
    [{ bottom: "10px", opacity: 1 }, { bottom: "180%", opacity: 1 }],
    {
      fill: "forwards",
      duration: 3000
    }
  );
  bubbleAnimation.onfinish = () => bubble.remove();
}, 300);
