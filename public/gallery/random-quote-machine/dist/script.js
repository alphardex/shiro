"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_URL = "https://v1.hitokoto.cn/";
var PALETTE = [
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
var socialShareURLMap = {
    twitter: "https://twitter.com/intent/tweet?hashtags=quotes&text=",
    facebook: "",
    tumblr: ""
};
var sample = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
var loadingBar = document.querySelector(".loading-bar");
var hitokoto = document.querySelector(".hitokoto-text");
var from = document.querySelector(".from-text");
var newQuoteBtn = document.querySelector(".new-quote");
var root = document.querySelector(":root");
var twitter = document.querySelector(".twitter");
var faecbook = document.querySelector(".facebook");
var tumblr = document.querySelector(".tumblr");
var progress;
var request = function (request) {
    return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        xhr.open(request.method, request.url);
        xhr.onprogress = function (e) {
            progress = (e.loaded / e.total) * 100;
            loadingBar.style.setProperty("--progress-value", "" + progress);
        };
        xhr.send();
        xhr.onload = function (e) {
            resolve(e.target.response);
        };
    });
};
var setQuote = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                loadingBar.style.setProperty("--progress-value", "" + 0);
                loadingBar.classList.remove("complete");
                _b = (_a = JSON).parse;
                return [4 /*yield*/, request({ url: API_URL, method: "GET" })];
            case 1:
                data = _b.apply(_a, [(_c.sent())]);
                hitokoto.textContent = data.hitokoto;
                from.textContent = data.from;
                loadingBar.classList.add("complete");
                root.style.setProperty("--theme-color", sample(PALETTE));
                return [2 /*return*/];
        }
    });
}); };
var setSocialBtn = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        [twitter, faecbook, tumblr].forEach(function (socialBtn) {
            var hitokotoText = hitokoto.textContent;
            var fromText = from.textContent;
            var content = "\"" + hitokotoText + "\" " + fromText + " #quotes";
            var url = "" + socialShareURLMap[socialBtn.className] + content;
            if (socialBtn.className === "tumblr") {
                url = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&content=" + hitokotoText + "&caption=" + fromText;
            }
            if (socialBtn.className === "facebook") {
                url = "#";
            }
            socialBtn.setAttribute("href", url);
        });
        return [2 /*return*/];
    });
}); };
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, setQuote()];
            case 1:
                _a.sent();
                return [4 /*yield*/, setSocialBtn()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
newQuoteBtn.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, setQuote()];
            case 1:
                _a.sent();
                return [4 /*yield*/, setSocialBtn()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
init();