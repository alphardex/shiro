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
        fragment.classList.add("swing-in-left-fwd");
        fragment.style.setProperty("--x", j);
        fragment.style.setProperty("--y", i);
        fragment.style.setProperty("--i", j + i * this.col);
        puzzle.appendChild(fragment);
      }
    }
  }
}

const puzzle = new Puzzle(document.querySelector(".puzzle"));

const start = () => {
  puzzle.create();
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
