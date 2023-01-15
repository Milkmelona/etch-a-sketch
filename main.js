let board = document.querySelector(".board");

function adjustSize(size){
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows = `repeat(${size}, 1fr)`

for (let i=0; i< (size * size); i++){
    let square = document.createElement("div");
    square.style.backgroundColor ="white";
    board.insertAdjacentElement("beforeend", square);
    square.addEventListener('mouseover', changeColor);
}
}
function changeColor(e){
    let colorPicked = document.getElementById('colorpicker');
    e.target.style.backgroundColor = colorPicked.value
}
function clearColor() {
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slidervalue');
slider.onchange = e => updateSliderValue(e.target.value)
function updateSliderValue (value) {
    sliderValue.innerHTML = `${value} x ${value}`;
    adjustSize(value);
    resetGrid();
}
function resetGrid(){
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}
