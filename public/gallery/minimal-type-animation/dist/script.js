const type = async (node, ...args) => {
    for (const arg of args) {
        switch (typeof arg) {
            case "string":
                // 输入字符时光标暂停闪烁
                node.setAttribute('pause', '')
                await edit(node, arg)
                break;
            case "number":
                // 等待时光标开始闪烁
                node.removeAttribute('pause')
                await wait(arg)
                break;
            case "function":
                // 支持递归，用来循环
                await arg(node, ...args);
                break;
            default:
                await arg;
        }
    }
}

const wait = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }

const edit = async (node, text) => {
    // 找出当前文本与传入文本重叠部分结束时字符的下标
    const overlap = Array.from(node.textContent).findIndex((char, i) => Array.from(text)[i] !== char)
    await execute(node, [...deletor(node.textContent, overlap), ...addor(text, overlap)])
}

const execute = async (node, steps) => {
    for (const step of playAnime(steps)) {
        step(node)
        await wait(60 + 0.5 * (Math.random() - 1))
    }
}

const playAnime = function* (newTexts) {
    // 将所有更新后的文本的帧在页面上重新绘制出来
    for (const newText of newTexts) {
        yield (node) => requestAnimationFrame(() => node.textContent = newText)
    }
}

const addor = function* ([...text], startIndex = 0, endIndex = text.length) {
    // 当前文本字符数小于传入文本字符数时，将文本从左开始添加
    while (startIndex < endIndex) {
        yield text.slice(0, ++startIndex).join('')
    }
}

const deletor = function* ([...nodeText], startIndex = 0, endIndex = nodeText.length) {
    while (startIndex < endIndex) {
        // 当前文本字符数大于传入文本字符数时，将文本从右开始删除
        yield nodeText.slice(0, --endIndex).join('')
    }
}

type(document.querySelector("#type"), "Hello world!", 1000, "Hello JavaScript!", 1500, "JavaScript is awesome!", 2000, type)