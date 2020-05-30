const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const cards = document.querySelectorAll(".card");
const startBtn = document.querySelector("#start");
const scoreNumber = document.querySelector(".score-number");
const timeLeftNumber = document.querySelector(".time-left-number");
const finalScoreDialog = document.querySelector("#final-score-dialog");
const finalScore = document.querySelector(".final-score");
const youWin = document.querySelector(".you-win");
const youLose = document.querySelector(".you-lose");
let cardFlippedElements: Element[] = [];
let score = 0;
let win = false;
const SCOREINC = 10;
const WINSCORE = (SCOREINC * cards.length) / 2;
const TIME = 40;
const INTERVAL = 600;
let timer;
let timeLeft = TIME;

const shuffleCards = () => {
  // 将卡牌顺序打乱
  const cardIndexes = Array.from(Array(cards.length).keys());
  const shufferedIndexs = shuffle(cardIndexes);
  cards.forEach((card, i) =>
    (card as HTMLElement).style.setProperty("--order", shufferedIndexs[i])
  );
};

const disableFlip = () => {
  // 禁止翻卡
  cards.forEach((card) => card.setAttribute("disabled", ""));
};

const enableFlip = () => {
  // 允许翻卡
  cards.forEach((card) => card.removeAttribute("disabled"));
};

const removeCardFlip = () => {
  // 将已翻面的卡牌翻回来
  cardFlippedElements.forEach((card) => card.classList.remove("flipped"));
};

const removeAllCardFlip = () => {
  // 将所有卡牌翻回来
  cards.forEach((card) => card.classList.remove("flipped"));
};

const listenCardFlip = () => {
  // 监听卡牌点击事件
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // 卡片未翻面时将其翻面
      if (!card.classList.contains("flipped")) {
        card.classList.add("flipped");
        cardFlippedElements.push(card);
        // 当翻面的卡牌数量为2张时判断它们是否相同，相同则得分并保持状态，不相同则不得分并翻回来
        if (cardFlippedElements.length === 2) {
          const [card1, card2] = cardFlippedElements;
          if ((card1 as HTMLElement).dataset.id === (card2 as HTMLElement).dataset.id) {
            score += SCOREINC;
            scoreNumber.textContent = `${score}`;
            cardFlippedElements = [];
            winGameJudge();
          } else {
            disableFlip();
            setTimeout(() => {
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

const cleanData = () => {
  // 清空所有数据
  removeAllCardFlip();
  disableFlip();
  score = 0;
  timeLeft = TIME;
  win = false;
  scoreNumber.textContent = `${score}`;
  timeLeftNumber.textContent = `${timeLeft}`;
  youWin.setAttribute("hidden", "");
  youLose.setAttribute("hidden", "");
};

const startGame = () => {
  // 开始游戏
  enableFlip();
  shuffleCards();
  listenCardFlip();
  timer = setInterval(() => {
    timeLeft--;
    timeLeftNumber.textContent = `${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
};

const endGame = () => {
  // 结束游戏
  showFinalScore();
  startBtn.removeAttribute("transparent");
  startBtn.removeAttribute("disabled");
  disableFlip();
};

const winGameJudge = () => {
  // 如果满足要求的分数（所有卡片被选中），则赢得游戏
  if (score === WINSCORE) {
    win = true;
    endGame();
  }
};

const showFinalScore = () => {
  // 展示最终得分弹窗
  clearInterval(timer);
  if (win) {
    youWin.removeAttribute("hidden");
  } else {
    youLose.removeAttribute("hidden");
  }
  finalScore.textContent = `${score}`;
  finalScoreDialog.removeAttribute("hidden");
};

const closeFinalScore = () => {
  // 关闭最终得分弹窗
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
  cleanData();
  listenGameStart();
};

main();
