let board = document.getElementById("board");
let info = document.getElementById("info");
let LENGTH = 15;
let WIDTH = 600;
let data = Array(LENGTH);
init();
renderBoard();
let cur = 0;

function renderBoard() {
  for (let i = 0;i < LENGTH - 1;i++) {
    for (let j = 0;j < LENGTH - 1;j++) {
      let cell = document.createElement("div");
      cell.className = "cell"
      board.appendChild(cell)
      cell.addEventListener('click', (target) => {
        console.log(target)
      })
    }
  }
}
function init() {
  data.forEach((c) => c = Array(LENGTH).fill(0));
  board.style.gridTemplateRows = `repeat(${LENGTH - 1}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${LENGTH - 1}, 1fr)`;
  board.style.width = `${WIDTH}px`
  board.style.height = `${WIDTH}px`
}
