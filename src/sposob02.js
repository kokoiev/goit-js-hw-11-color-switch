const btnStopRef = document.querySelector(`button[data-action="stop"]`);
const btnStartRef = document.querySelector(`button[data-action="start"]`);
const bodyRef = document.querySelector(`body`);
const tagStyleRef = document.createElement('style');


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
bodyRef.appendChild(tagStyleRef);

function changeColor() {
        if (btnStartRef.disabled === true) {
        setTimeout(changeColor, 1000)
        const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        tagStyleRef.setAttribute("type", "text/css");
        tagStyleRef.textContent = `body {background: ${randomColor};}`
    }
    return
};

btnStartRef.addEventListener('click', () => { btnStartRef.setAttribute("disabled", "disabled"); changeColor() })
btnStopRef.addEventListener('click', () => btnStartRef.removeAttribute("disabled" ))





    
