let hh = 99;
let mm = 59;
let count = 0;

const renderDict = [
    { ss: 59, isShowColon: false },
    { ss: 59, isShowColon: true },
    { ss: 58, isShowColon: false },
    { ss: 58, isShowColon: true },
]

const countDownFunc = () => {
    if (++count > renderDict.length - 1) {
        count = 0;
    }
    const targetElem = document.getElementById("time");
    targetElem.innerText = `${("00" + hh).slice(-2)}${renderDict[count].isShowColon ? ":" : " "}${("00" + mm).slice(-2)}${renderDict[count].isShowColon ? ":" : " "}${("00" + renderDict[count].ss).slice(-2)}`
}

setInterval(countDownFunc, 500)