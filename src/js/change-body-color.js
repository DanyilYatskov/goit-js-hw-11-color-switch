const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#9932cc',
  '#232b2b',
  '#098765',
  '#1e2240',
  '#ffc0cb',
  '#ff1969',
];
const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector("[data-action='start']"),
  btnStop: document.querySelector("[data-action='stop']"),
};
let intervalId = null;
let avalaible = true;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function newColour(colours) {
  const idx = randomIntegerFromInterval(0, colours.length - 1);
  return colours[idx];
}
function changeColour(colour, element) {
  element.style.backgroundColor = colour;
}
function onStart() {
  if (!avalaible) {
    return;
  }
  avalaible = false;
  intervalId = setInterval(() => {
    let colour = newColour(colors);
    changeColour(colour, refs.body);
  }, 1000);
  refs.btnStart.disabled = true;
}
function onStop() {
  clearInterval(intervalId);
  avalaible = true;
  intervalId = null;
  refs.btnStart.disabled = false;
}
refs.btnStart.addEventListener('click', onStart);
refs.btnStop.addEventListener('click', onStop);
