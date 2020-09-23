const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

class Puzzle {
  constructor(el, width = 16, height = 24, row = 3, col = 3, gap = 1) {
    this.el = el;
    this.fragments = el.children;
    this.width = width;
    this.height = height;
    this.row = row;
    this.col = col;
    this.gap = gap;
  }

  // 创建拼图
  create() {
    this.ids = [...Array(this.row * this.col).keys()];
    const puzzle = this.el;
    const fragments = this.fragments;
    if (fragments.length) {
      Array.from(fragments).forEach((item) => item.remove());
    }
    puzzle.style.setProperty("--puzzle-width", this.width + "rem");
    puzzle.style.setProperty("--puzzle-height", this.height + "rem");
    puzzle.style.setProperty("--puzzle-row", this.row);
    puzzle.style.setProperty("--puzzle-col", this.col);
    puzzle.style.setProperty("--puzzle-gap", this.gap + "px");
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        const fragment = document.createElement("div");
        fragment.className = "fragment";
        fragment.style.setProperty("--x", j);
        fragment.style.setProperty("--y", i);
        fragment.style.setProperty("--i", j + i * this.col);
        puzzle.appendChild(fragment);
      }
    }
  }

  // 碎片重新排序
  reorder(newIds) {
    const fragments = this.fragments;
    for (let id = 0; id < this.ids.length; id++) {
      fragments[id].style.setProperty("--order", newIds[id]);
    }
  }

  // 打乱拼图
  shuffle() {
    const shuffledIds = shuffle(this.ids);
    this.reorder(shuffledIds);
  }
}

class Sortable {
  constructor(el, total) {
    let that = this;
    this.el = el;
    this.total = total;
    this.riseAnime = gsap.to(el, {
      boxShadow: "0 16px 32px rgba(0,0,0,0.3)",
      scale: 1.1,
      duration: 0.3,
      paused: true,
    });
    this.draggie = new Draggable(el, {
      onDragStart: function () {
        that.riseAnime.play();
      },
      onRelease: function () {
        that.riseAnime.reverse();
        const total = that.total;
        let hitTargets = [];
        for (const item of total) {
          if (this.hitTest(item, "70%")) {
            hitTargets.push(item);
          }
        }
        if (hitTargets.length === 1) {
          const target = this.target;
          const hitTarget = hitTargets[0];
          const targetOrder = target.style.getPropertyValue("--order");
          const hitTargetOrder = hitTarget.style.getPropertyValue("--order");
          target.style.setProperty("--order", hitTargetOrder);
          hitTarget.style.setProperty("--order", targetOrder);
          gsap.to(target, {
            x: 0,
            y: 0,
            duration: 0,
          });
        } else {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.3,
          });
        }
        const orders = Array.from(that.total).map((item) => item.style.getPropertyValue("--order"));
        const ids = Array.from(that.total).map((item) => item.style.getPropertyValue("--i"));
        if (orders.toString() === ids.toString()) {
          sleep(300).then(() => {
            alert("Congratulations! You win!");
          });
        }
      },
    });
  }
}

const puzzle = new Puzzle(document.querySelector(".puzzle"));

const start = () => {
  puzzle.create();
  puzzle.shuffle();
  const fragments = puzzle.fragments;
  const sortables = Array.from(fragments).map((item) => new Sortable(item, fragments));
};

const gui = new dat.GUI();
gui
  .add(puzzle, "width", 1, 50)
  .step(1)
  .onChange((newValue) => start());
gui
  .add(puzzle, "height", 1, 50)
  .step(1)
  .onChange((newValue) => start());
gui
  .add(puzzle, "row", 1, 10)
  .step(1)
  .onChange((newValue) => start());
gui
  .add(puzzle, "col", 1, 10)
  .step(1)
  .onChange((newValue) => start());
gui
  .add(puzzle, "gap", 0, 100)
  .step(1)
  .onChange((newValue) => start());

start();