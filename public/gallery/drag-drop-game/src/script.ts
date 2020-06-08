const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

const getOffset = (el: Element) => {
    const offset = el.getBoundingClientRect()
    return { top: offset.top - window.scrollY, left: offset.left - window.scrollX }
}

const randomIntArrayInRange = (min: number, max: number, n = 1) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

interface Coord {
    x: number;
    y: number;
}

// 可投放的地方，也就是本例子中的target
class Droppable {
    droppableEl: HTMLElement

    constructor(el: HTMLElement) {
        this.droppableEl = el
    }

    // 当拖拽元素与投放点相交，且相交距离小于投放点宽高的一半时则可以投放
    isDroppable(draggableEl: HTMLElement) {
        const draggableOffset = getOffset(draggableEl)
        const droppableOffset = getOffset(this.droppableEl)
        const [draggableWidth, draggableHeight] = [draggableEl.offsetWidth, draggableEl.offsetHeight]
        const [droppableWidth, droppableHeight] = [this.droppableEl.offsetWidth, this.droppableEl.offsetHeight]
        return !(droppableOffset.left > draggableOffset.left + draggableWidth - draggableWidth / 2 ||
            droppableOffset.left + droppableWidth < draggableOffset.left + draggableWidth / 2 ||
            droppableOffset.top > draggableOffset.top + draggableHeight - draggableHeight / 2 ||
            droppableOffset.top + droppableHeight < draggableOffset.top + draggableHeight / 2)
    }
}

// 拖拽物，也就是本例子中的draggable
class Draggable {
    draggableEl: HTMLElement;
    draggie: Draggabilly;
    originPos: Coord;

    constructor(el: HTMLElement) {
        this.draggableEl = el
        this.draggie = new Draggabilly(el)
        this.originPos = { ...this.draggie.position }
    }
}

const randomBlockWidths = randomIntArrayInRange(30, 60, 10)
const randomBlockBorderRadiuses = randomIntArrayInRange(1, 30, 10)
let draggableBlocks = document.querySelectorAll('.block.draggable')
let targetBlocks = document.querySelectorAll('.block.target')
let startBtn = document.querySelector('#start')
const scoreNumber = document.querySelector(".score-number");
const timeLeftNumber = document.querySelector(".time-left-number");
const finalScoreDialog = document.querySelector("#final-score-dialog");
const finalScore = document.querySelector(".final-score");
const youWin = document.querySelector(".you-win");
const youLose = document.querySelector(".you-lose");
let draggables = Array.from(draggableBlocks).map(block => new Draggable((block as HTMLElement)))
let droppables = Array.from(targetBlocks).map(block => new Droppable((block as HTMLElement)))
let score = 0;
let win = false;
const SCOREINC = 10;
const WINSCORE = SCOREINC * targetBlocks.length;
const TIME = 30;
const INTERVAL = 600;
let timer;
let timeLeft = TIME;

// 允许拖拽
const enableBlocks = () => {
    draggables.forEach(draggable => {
        draggable.draggableEl.removeAttribute('disabled')
    })
}

// 禁止拖拽
const disableBlocks = () => {
    draggables.forEach(draggable => {
        draggable.draggableEl.setAttribute('disabled', '')
    })
}

// 将目标顺序打乱
const shuffleTargets = () => {
    const cardIndexes = Array.from(Array(targetBlocks.length).keys());
    const shufferedIndexs = shuffle(cardIndexes);
    targetBlocks.forEach((item, i) =>
        (item as HTMLElement).style.setProperty("--order", shufferedIndexs[i])
    );
};

// 给目标设置随机的大小和形状（实际情况则是用不同的图片）
const setRandomSizes = (elements: NodeListOf<Element>) => {
    elements.forEach((item, i) => {
        (item as HTMLElement).style.setProperty('--width', `${randomBlockWidths[i]}px`);
        (item as HTMLElement).style.setProperty('--border-radius', `${randomBlockBorderRadiuses[i]}px`)
    })
}

// 给拖拽物和投放点设置大小
const setRandomBlockSizes = () => {
    setRandomSizes(draggableBlocks)
    setRandomSizes(targetBlocks)
}

// 将拖拽物放回原处
const moveBack = (draggable: Draggable) => {
    const draggableEl = draggable.draggableEl
    draggableEl.classList.add('animated')
    draggableEl.style.left = `${draggable.originPos.x}`
    draggableEl.style.top = `${draggable.originPos.y}`
    draggableEl.addEventListener('transitionend', () => {
        draggableEl.classList.remove('animated')
    })
}

// 投放拖拽物
const dropDown = (draggable: Draggable, droppable: Droppable) => {
    const draggableEl = draggable.draggableEl
    draggableEl.setAttribute('transparent', '')
    const droppableEl = droppable.droppableEl
    droppableEl.classList.add('dropped')
}

// 监听拖拽事件
const listenDragEvent = () => {
    draggables.forEach(draggable => {
        const draggie = draggable.draggie
        draggie.on('dragEnd', function () {
            const draggableElement = this.element
            // 找出我们拖拽元素的对应的目标元素
            const dragId = parseInt(draggableElement.dataset.id)
            const correspondingDroppable = droppables[dragId - 1]
            // 如果能投放，则投放并加分，否则将拖拽物返回原处
            if (correspondingDroppable.isDroppable(draggableElement)) {
                dropDown(draggable, correspondingDroppable)
                score += SCOREINC
                scoreNumber.textContent = `${score}`;
                winGameJudge()
            } else {
                moveBack(draggable)
            }
        })
    })
}

// 还原所有拖拽物和投放物
const recoverBlocks = () => {
    draggables.forEach(draggable => {
        moveBack(draggable)
        const draggableEl = draggable.draggableEl
        draggableEl.classList.remove('animated')
        draggableEl.removeAttribute('transparent')
    })
    droppables.forEach(droppable => {
        const droppableEl = droppable.droppableEl
        droppableEl.classList.remove('dropped')
    })
}

// 清空所有数据
const cleanData = () => {
    recoverBlocks()
    shuffleTargets()
    score = 0;
    timeLeft = TIME;
    win = false;
    scoreNumber.textContent = `${score}`;
    timeLeftNumber.textContent = `${timeLeft}`;
    youWin.setAttribute("hidden", "");
    youLose.setAttribute("hidden", "");
};

// 开始游戏
const startGame = () => {
    enableBlocks()
    timer = setInterval(() => {
        timeLeft--;
        timeLeftNumber.textContent = `${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
};

// 结束游戏
const endGame = () => {
    disableBlocks()
    showFinalScore();
    startBtn.removeAttribute("transparent");
    startBtn.removeAttribute("disabled");
};

// 如果满足要求的分数（所有投放都已完成），则赢得游戏
const winGameJudge = () => {
    if (score === WINSCORE) {
        win = true;
        endGame();
    }
};

// 展示最终得分弹窗
const showFinalScore = () => {
    clearInterval(timer);
    if (win) {
        youWin.removeAttribute("hidden");
    } else {
        youLose.removeAttribute("hidden");
    }
    finalScore.textContent = `${score}`;
    finalScoreDialog.removeAttribute("hidden");
};

// 关闭最终得分弹窗
const closeFinalScore = () => {
    finalScoreDialog.setAttribute("hidden", "");
    cleanData();
};

const listenGameStart = () => {
    startBtn.addEventListener("click", () => {
        startBtn.setAttribute("transparent", "");
        startBtn.setAttribute("disabled", "");
        startGame();
    });
};

const main = () => {
    setRandomBlockSizes()
    disableBlocks()
    cleanData()
    listenDragEvent()
    listenGameStart()
}

main()