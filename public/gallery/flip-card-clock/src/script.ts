class Flipper {
  isFlipping = false;
  flipNode: Element = null;
  frontNode: Element = null;
  backNode: Element = null;
  duration: number = 600;

  constructor(node: Element, currentTime: string, nextTime: string) {
    this.flipNode = node;
    this.frontNode = node.querySelector(".front");
    this.backNode = node.querySelector(".back");
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
  }

  digitalClassFormat(aspect: string, time: string) {
    return `digital ${aspect} number${time}`;
  }

  setFrontTime(time: string) {
    this.frontNode.className = this.digitalClassFormat("front", time);
  }

  setBackTime(time: string) {
    this.backNode.className = this.digitalClassFormat("back", time);
  }

  flipDown(currentTime: string, nextTime: string) {
    if (this.isFlipping) {
      return false;
    }
    this.isFlipping = true;
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
    this.flipNode.classList.add("running");
    setTimeout(() => {
      this.flipNode.classList.remove("running");
      this.isFlipping = false;
      this.setFrontTime(nextTime);
    }, this.duration);
  }
}

const getTimeFromDate = (date: Date) =>
  date
    .toTimeString()
    .slice(0, 8)
    .split(":")
    .join("");

let flips = document.querySelectorAll(".flip");
let now = new Date();
let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
let nextTimeStr = getTimeFromDate(now);
let flippers = Array.from(flips).map(
  (flip, i) => new Flipper(flip, nowTimeStr[i], nextTimeStr[i])
);

setInterval(() => {
  let now = new Date();
  let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
  let nextTimeStr = getTimeFromDate(now);
  for (let i = 0; i < flippers.length; i++) {
    if (nowTimeStr[i] === nextTimeStr[i]) {
      continue;
    }
    flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
  }
}, 1000);
