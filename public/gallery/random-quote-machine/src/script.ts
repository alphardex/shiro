interface Request_ {
  url: string;
  method: string;
}

interface Quote {
  hitokoto: string;
  from: string;
}

const API_URL = "https://v1.hitokoto.cn/";
const PALETTE = [
  "#ca7a92",
  "#A8CBC6",
  "#817487",
  "#4A3F55",
  "#E5B8BD",
  "#C2617E",
  "#C2617E",
  "#B7D7B6",
  "#b46d95",
  "#c5848b",
  "#79A7B5",
  "#D29595",
  "#E8A8C9",
  "#C45F41",
  "#EF99A3",
  "#48939D"
];
const socialShareURLMap = {
  twitter: "https://twitter.com/intent/tweet?hashtags=quotes&text=",
  facebook: "",
  tumblr:
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&content="
};
const sample = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
let loadingBar = document.querySelector(".loading-bar");
let quoteBox = document.querySelector(".quote-box");
let hitokoto = document.querySelector(".hitokoto-text");
let from = document.querySelector(".from-text");
let newQuoteBtn = document.querySelector(".new-quote");
let root = document.querySelector(":root");
let twitter = document.querySelector(".twitter");
let faecbook = document.querySelector(".facebook");
let tumblr = document.querySelector(".tumblr");
let progress;
const request = (request: Request_) => {
  return new Promise(resolve => {
    let xhr = new XMLHttpRequest();
    xhr.open(request.method, request.url);
    xhr.onprogress = (e: ProgressEvent) => {
      progress = (e.loaded / e.total) * 100;
      (loadingBar as HTMLElement).style.setProperty(
        "--progress-value",
        `${progress}`
      );
    };
    xhr.send();
    xhr.onload = (e: Event) => {
      resolve((e.target as XMLHttpRequest).response);
    };
  });
};
const setQuote = async () => {
  (loadingBar as HTMLElement).style.setProperty("--progress-value", `${0}`);
  quoteBox.classList.remove("active");
  loadingBar.classList.remove("complete");
  let data = JSON.parse(
    (await request({ url: API_URL, method: "GET" })) as string
  );
  hitokoto.textContent = data.hitokoto;
  from.textContent = data.from;
  loadingBar.classList.add("complete");
  quoteBox.classList.add("active");
  (root as HTMLElement).style.setProperty("--theme-color", sample(PALETTE));
};
const setSocialBtn = async () => {
  [twitter, faecbook, tumblr].forEach(socialBtn => {
    let content = `"${hitokoto.textContent}" ${from.textContent} #quotes`;
    let url = `${socialShareURLMap[socialBtn.className]}${content}`;
    if (socialBtn.className === "tumblr") {
      url = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&content=${hitokoto.textContent}&caption=${from.textContent}`;
    }
    if (socialBtn.className === "facebook") {
      url = "#";
    }
    socialBtn.setAttribute("href", url);
  });
};
let init = async () => {
  await setQuote();
  await setSocialBtn();
};
newQuoteBtn.addEventListener("click", async () => {
  await setQuote();
  await setSocialBtn();
});
init();
