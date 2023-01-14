let board = document.querySelector('.board');
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';

for (i=0; i< 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'black';
    board.insertAdjacentElement = ('beforeend', square);
}