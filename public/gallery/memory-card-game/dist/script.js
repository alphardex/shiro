"use strict";
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
var cards = document.querySelectorAll(".card");
var startBtn = document.querySelector("#start");
var scoreNumber = document.querySelector(".score-number");
var timeLeftNumber = document.querySelector(".time-left-number");
var finalScoreDialog = document.querySelector("#final-score-dialog");
var finalScore = document.querySelector(".final-score");
var youWin = document.querySelector(".you-win");
var youLose = document.querySelector(".you-lose");
var cardFlippedElements = [];
var score = 0;
var win = false;
var SCOREINC = 10;
var WINSCORE = (SCOREINC * cards.length) / 2;
var TIME = 40;
var INTERVAL = 600;
var timer;
var timeLeft = TIME;
var shuffleCards = function () {
    // 将卡牌顺序打乱
    var cardIndexes = Array.from(Array(cards.length).keys());
    var shufferedIndexs = shuffle(cardIndexes);
    cards.forEach(function (card, i) {
        return card.style.setProperty("--order", shufferedIndexs[i]);
    });
};
var disableFlip = function () {
    // 禁止翻卡
    cards.forEach(function (card) { return card.setAttribute("disabled", ""); });
};
var enableFlip = function () {
    // 允许翻卡
    cards.forEach(function (card) { return card.removeAttribute("disabled"); });
};
var removeCardFlip = function () {
    // 将已翻面的卡牌翻回来
    cardFlippedElements.forEach(function (card) { return card.classList.remove("flipped"); });
};
var removeAllCardFlip = function () {
    // 将所有卡牌翻回来
    cards.forEach(function (card) { return card.classList.remove("flipped"); });
};
var listenCardFlip = function () {
    // 监听卡牌点击事件
    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            // 卡片未翻面时将其翻面
            if (!card.classList.contains("flipped")) {
                card.classList.add("flipped");
                cardFlippedElements.push(card);
                // 当翻面的卡牌数量为2张时判断它们是否相同，相同则得分并保持状态，不相同则不得分并翻回来
                if (cardFlippedElements.length === 2) {
                    var card1 = cardFlippedElements[0], card2 = cardFlippedElements[1];
                    if (card1.dataset.id === card2.dataset.id) {
                        score += SCOREINC;
                        scoreNumber.textContent = "" + score;
                        cardFlippedElements = [];
                        winGameJudge();
                    }
                    else {
                        disableFlip();
                        setTimeout(function () {
                            removeCardFlip();
                            enableFlip();
                            cardFlippedElements = [];
                        }, INTERVAL);
                    }
                }
            }
        });
    });
};
var cleanData = function () {
    // 清空所有数据
    removeAllCardFlip();
    disableFlip();
    score = 0;
    timeLeft = TIME;
    win = false;
    scoreNumber.textContent = "" + score;
    timeLeftNumber.textContent = "" + timeLeft;
    youWin.setAttribute("hidden", "");
    youLose.setAttribute("hidden", "");
};
var startGame = function () {
    // 开始游戏
    enableFlip();
    shuffleCards();
    listenCardFlip();
    timer = setInterval(function () {
        timeLeft--;
        timeLeftNumber.textContent = "" + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
};
var endGame = function () {
    // 结束游戏
    showFinalScore();
    startBtn.removeAttribute("transparent");
    startBtn.removeAttribute("disabled");
    disableFlip();
};
var winGameJudge = function () {
    // 如果满足要求的分数（所有卡片被选中），则赢得游戏
    if (score === WINSCORE) {
        win = true;
        endGame();
    }
};
var showFinalScore = function () {
    // 展示最终得分弹窗
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
var closeFinalScore = function () {
    // 关闭最终得分弹窗
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
    cleanData();
    listenGameStart();
};
main();