const btnStopRef = document.querySelector(`button[data-action="stop"]`);
const btnStartRef = document.querySelector(`button[data-action="start"]`);
const bodyRef = document.querySelector(`body`);

let intervalId = null;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBgColor() { 
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  bodyRef.setAttribute('style', `background: ${randomColor}`);
  btnStartRef.setAttribute("disabled", "disabled")
  
};

function onClickStart() {intervalId = setInterval(changeBgColor, 1000)}
function onClickStop() {
  clearInterval(intervalId);
  btnStartRef.disabled = false
}

btnStartRef.addEventListener('click', onClickStart)
btnStopRef.addEventListener('click', onClickStop)