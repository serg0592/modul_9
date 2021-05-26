const greenCircle = document.querySelector('#green');
const yellowCircle = document.querySelector('#yellow');
const redCircle = document.querySelector('#red');

function makeGreen() {
    greenCircle.style.background = ('green');
    yellowCircle.style.background = ('black');
    redCircle.style.background = ('black');
    greenCircle.removeEventListener('click', makeGreen);
    greenCircle.addEventListener('click', makeYellow);
    yellowCircle.removeEventListener('click', makeGreen);
    yellowCircle.addEventListener('click', makeYellow);
    redCircle.removeEventListener('click', makeGreen);
    redCircle.addEventListener('click', makeYellow);
}

function makeYellow() {
    greenCircle.style.background = ('black');
    yellowCircle.style.background = ('yellow');
    redCircle.style.background = ('black');
    greenCircle.removeEventListener('click', makeYellow);
    greenCircle.addEventListener('click', makeRed);
    yellowCircle.removeEventListener('click', makeYellow);
    yellowCircle.addEventListener('click', makeRed);
    redCircle.removeEventListener('click', makeYellow);
    redCircle.addEventListener('click', makeRed);
}

function makeRed() {
    greenCircle.style.background = ('black');
    yellowCircle.style.background = ('black');
    redCircle.style.background = ('red');
    greenCircle.removeEventListener('click', makeRed);
    greenCircle.addEventListener('click', makeGreen);
    yellowCircle.removeEventListener('click', makeRed);
    yellowCircle.addEventListener('click', makeGreen);
    redCircle.removeEventListener('click', makeRed);
    redCircle.addEventListener('click', makeGreen);
}

greenCircle.addEventListener('click', makeGreen);
yellowCircle.addEventListener('click', makeGreen);
redCircle.addEventListener('click', makeGreen);