let btnColor = document.querySelector('#button');
const body = document.querySelector('body');
const resultColor = document.querySelector('#result-color');

const color = [];

resultColor.textContent = `Background: rgba(000, 000, 000);`;

btnColor.addEventListener('click', () => {
    colorGenerator();
    resultColor.textContent = `Color: rgba(${color.join(', ')});`;
    body.style.background = `rgba(${color[0]}, ${color[1]}, ${color[2]})`;
});

function colorGenerator() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    color.length = 0

    color.push(red, green, blue);
};