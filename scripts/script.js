let hh = 99;
let mm = 59;
let ss = 20;
let isShowColon = true;

const countDownFunc = () => {
    if (isShowColon) {
        if (--ss < 0) {
            ss = 59;
            if (--mm < 0) {
                mm = 59;
                --hh;
            }
        }
    }
    isShowColon = !isShowColon
    const targetElem = document.getElementById("time");
    targetElem.innerText = `${("00" + hh).slice(-2)}${isShowColon ? ":" : " "}${("00" + mm).slice(-2)}${isShowColon ? ":" : " "}${("00" + ss).slice(-2)}`
}

setInterval(countDownFunc, 500)