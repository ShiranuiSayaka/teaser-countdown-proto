const getRandomInt = (_min, _max) => {
    const min = Math.ceil(_min);
    const max = Math.floor(_max);
    return Math.floor(Math.random() * (max - min) + min);
}

let hh = getRandomInt(0, 99);
let mm = getRandomInt(0, 60);
let ss = getRandomInt(0, 60);
let isShowColon = true;
let countUpdateIndex = 0;
let isCountUp = true;

const countDownFunc = () => {
    if (countUpdateIndex++ > 9) {
        hh = getRandomInt(0, 99);
        mm = getRandomInt(0, 60);
        ss = getRandomInt(0, 60);
        countUpdateIndex = 0
        if (getRandomInt(0, 10) >= 5) {
            isCountUp = true;
        }
        else {
            isCountUp = false;
        }
    }
    if (isShowColon) {
        if (isCountUp) {
            if (++ss > 60) {
                ss = 0;
                if (++mm > 60) {
                    mm = 0;
                    ++hh;
                }
            }
        } else {
            if (--ss < 0) {
                ss = 59;
                if (--mm < 0) {
                    mm = 59;
                    --hh;
                }
            }
        }
    }
    isShowColon = !isShowColon;
    const targetElem = document.getElementById("time");
    targetElem.innerText = `${("00" + hh).slice(-2)}${isShowColon ? ":" : " "}${("00" + mm).slice(-2)}${isShowColon ? ":" : " "}${("00" + ss).slice(-2)}`
}

setInterval(countDownFunc, 500)