"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var shuffle = function (_a) {
    var _b;
    var arr = _a.slice(0);
    var m = arr.length;
    while (m) {
        var i = Math.floor(Math.random() * m--);
        _b = [arr[i], arr[m]], arr[m] = _b[0], arr[i] = _b[1];
    }
    return arr;
};
var getOffset = function (el) {
    var offset = el.getBoundingClientRect();
    return { top: offset.top - window.scrollY, left: offset.left - window.scrollX };
};
var randomIntArrayInRange = function (min, max, n) {
    if (n === void 0) { n = 1; }
    return Array.from({ length: n }, function () { return Math.floor(Math.random() * (max - min + 1)) + min; });
};
// 可投放的地方，也就是本例子中的target
var Droppable = /** @class */ (function () {
    function Droppable(el) {
        this.droppableEl = el;
    }
    // 当拖拽元素与投放点相交，且相交距离小于投放点宽高的一半时则可以投放
    Droppable.prototype.isDroppable = function (draggableEl) {
        var draggableOffset = getOffset(draggableEl);
        var droppableOffset = getOffset(this.droppableEl);
        var _a = [draggableEl.offsetWidth, draggableEl.offsetHeight], draggableWidth = _a[0], draggableHeight = _a[1];
        var _b = [this.droppableEl.offsetWidth, this.droppableEl.offsetHeight], droppableWidth = _b[0], droppableHeight = _b[1];
        return !(droppableOffset.left > draggableOffset.left + draggableWidth - draggableWidth / 2 ||
            droppableOffset.left + droppableWidth < draggableOffset.left + draggableWidth / 2 ||
            droppableOffset.top > draggableOffset.top + draggableHeight - draggableHeight / 2 ||
            droppableOffset.top + droppableHeight < draggableOffset.top + draggableHeight / 2);
    };
    return Droppable;
}());
// 拖拽物，也就是本例子中的draggable
var Draggable = /** @class */ (function () {
    function Draggable(el) {
        this.draggableEl = el;
        this.draggie = new Draggabilly(el);
        this.originPos = __assign({}, this.draggie.position);
    }
    return Draggable;
}());
var randomBlockWidths = randomIntArrayInRange(30, 60, 10);
var randomBlockBorderRadiuses = randomIntArrayInRange(1, 30, 10);
var draggableBlocks = document.querySelectorAll('.block.draggable');
var targetBlocks = document.querySelectorAll('.block.target');
var startBtn = document.querySelector('#start');
var scoreNumber = document.querySelector(".score-number");
var timeLeftNumber = document.querySelector(".time-left-number");
var finalScoreDialog = document.querySelector("#final-score-dialog");
var finalScore = document.querySelector(".final-score");
var youWin = document.querySelector(".you-win");
var youLose = document.querySelector(".you-lose");
var draggables = Array.from(draggableBlocks).map(function (block) { return new Draggable(block); });
var droppables = Array.from(targetBlocks).map(function (block) { return new Droppable(block); });
var score = 0;
var win = false;
var SCOREINC = 10;
var WINSCORE = SCOREINC * targetBlocks.length;
var TIME = 30;
var INTERVAL = 600;
var timer;
var timeLeft = TIME;
// 允许拖拽
var enableBlocks = function () {
    draggables.forEach(function (draggable) {
        draggable.draggableEl.removeAttribute('disabled');
    });
};
// 禁止拖拽
var disableBlocks = function () {
    draggables.forEach(function (draggable) {
        draggable.draggableEl.setAttribute('disabled', '');
    });
};
// 将目标顺序打乱
var shuffleTargets = function () {
    var cardIndexes = Array.from(Array(targetBlocks.length).keys());
    var shufferedIndexs = shuffle(cardIndexes);
    targetBlocks.forEach(function (item, i) {
        return item.style.setProperty("--order", shufferedIndexs[i]);
    });
};
// 给目标设置随机的大小和形状（实际情况则是用不同的图片）
var setRandomSizes = function (elements) {
    elements.forEach(function (item, i) {
        item.style.setProperty('--width', randomBlockWidths[i] + "px");
        item.style.setProperty('--border-radius', randomBlockBorderRadiuses[i] + "px");
    });
};
// 给拖拽物和投放点设置大小
var setRandomBlockSizes = function () {
    setRandomSizes(draggableBlocks);
    setRandomSizes(targetBlocks);
};
// 将拖拽物放回原处
var moveBack = function (draggable) {
    var draggableEl = draggable.draggableEl;
    draggableEl.classList.add('animated');
    draggableEl.style.left = "" + draggable.originPos.x;
    draggableEl.style.top = "" + draggable.originPos.y;
    draggableEl.addEventListener('transitionend', function () {
        draggableEl.classList.remove('animated');
    });
};
// 投放拖拽物
var dropDown = function (draggable, droppable) {
    var draggableEl = draggable.draggableEl;
    draggableEl.setAttribute('transparent', '');
    var droppableEl = droppable.droppableEl;
    droppableEl.classList.add('dropped');
};
// 监听拖拽事件
var listenDragEvent = function () {
    draggables.forEach(function (draggable) {
        var draggie = draggable.draggie;
        draggie.on('dragEnd', function () {
            var draggableElement = this.element;
            // 找出我们拖拽元素的对应的目标元素
            var dragId = parseInt(draggableElement.dataset.id);
            var correspondingDroppable = droppables[dragId - 1];
            // 如果能投放，则投放并加分，否则将拖拽物返回原处
            if (correspondingDroppable.isDroppable(draggableElement)) {
                dropDown(draggable, correspondingDroppable);
                score += SCOREINC;
                scoreNumber.textContent = "" + score;
                winGameJudge();
            }
            else {
                moveBack(draggable);
            }
        });
    });
};
// 还原所有拖拽物和投放物
var recoverBlocks = function () {
    draggables.forEach(function (draggable) {
        moveBack(draggable);
        var draggableEl = draggable.draggableEl;
        draggableEl.classList.remove('animated');
        draggableEl.removeAttribute('transparent');
    });
    droppables.forEach(function (droppable) {
        var droppableEl = droppable.droppableEl;
        droppableEl.classList.remove('dropped');
    });
};
// 清空所有数据
var cleanData = function () {
    recoverBlocks();
    shuffleTargets();
    score = 0;
    timeLeft = TIME;
    win = false;
    scoreNumber.textContent = "" + score;
    timeLeftNumber.textContent = "" + timeLeft;
    youWin.setAttribute("hidden", "");
    youLose.setAttribute("hidden", "");
};
// 开始游戏
var startGame = function () {
    enableBlocks();
    timer = setInterval(function () {
        timeLeft--;
        timeLeftNumber.textContent = "" + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
};
// 结束游戏
var endGame = function () {
    disableBlocks();
    showFinalScore();
    startBtn.removeAttribute("transparent");
    startBtn.removeAttribute("disabled");
};
// 如果满足要求的分数（所有投放都已完成），则赢得游戏
var winGameJudge = function () {
    if (score === WINSCORE) {
        win = true;
        endGame();
    }
};
// 展示最终得分弹窗
var showFinalScore = function () {
    clearInterval(timer);
    if (win) {
        youWin.removeAttribute("hidden");
    }
    else {
        youLose.removeAttribute("hidden");
    }
    finalScore.textContent = "" + score;
    finalScoreDialog.removeAttribute("hidden");
};
// 关闭最终得分弹窗
var closeFinalScore = function () {
    finalScoreDialog.setAttribute("hidden", "");
    cleanData();
};
var listenGameStart = function () {
    startBtn.addEventListener("click", function () {
        startBtn.setAttribute("transparent", "");
        startBtn.setAttribute("disabled", "");
        startGame();
    });
};
var main = function () {
    setRandomBlockSizes();
    disableBlocks();
    cleanData();
    listenDragEvent();
    listenGameStart();
};
main();