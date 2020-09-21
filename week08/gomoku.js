let board = document.getElementById("board");
let info = document.getElementById("info");
let LENGTH = 15;
let WIDTH = 600;
let MAXLINE = 5;
let data = Array(LENGTH);
init();
renderBoard();
let cur = 1;
let width = -1;
function getCellWidth() {
  let {width} = board.children[0].getBoundingClientRect();
  return width;
}
function renderBoard() {
  for (let i = 0;i < LENGTH - 1;i++) {
    for (let j = 0;j < LENGTH - 1;j++) {
      let cell = document.createElement("div");
      cell.className = "cell"
      board.appendChild(cell)
      cell.addEventListener('click', (event) => {
        let {offsetX,offsetY,target} = event;
        if (target !== cell) {
          return;
        }
        addChess(offsetX,offsetY, i,j,cell);
      })
    }
  }
}
function addChess(offsetX, offsetY,i,j,target) {
  let x = 0,y = 0;
  if (offsetX > width / 2) {
    y++;
  }
  if (offsetY > width/ 2) {
    x++;
  }
  if (data[i+x][j+y] !== 0) {
    return;
  }
  console.log(x,y)
  let chess = document.createElement("div");
  chess.className = "chess";
  chess.style.width = `${width}px`
  chess.style.height = `${width}px`
  chess.style.backgroundColor = `${cur === 1?"black":"white"}`;
  chess.style.borderRadius = `${width / 2}px`
  if (x === 1) {
    chess.style.top = `${width/2}px`
  } else {
    chess.style.top = `-${width/2}px`
  }
  if (y === 1) {
    chess.style.left = `${width/2}px`
  } else {
    chess.style.left = `-${width/2}px`
  }
  target.appendChild(chess);
  [i,j] = [i+x,j+y];
  data[i][j] = cur;
  if(willWin(i,j)) {
    document.getElementById("info").innerHTML = `<h1>${cur === 1 ? "黑":"白"}方获胜</h1>`
  };
  cur = 3-cur;
}
function willWin(x,y) {
  let arr = Array(4);
  for (let i = 0;i<4;i++) {
    arr[i] = [];
  }
  for (let i = 0;i < LENGTH;i++){
    for (let j = 0;j < LENGTH;j++){
      let v = data[i][j];
      if (i === x) {
        arr[0].push(v);
      }
      if (j === y) {
        arr[1].push(v);
      }
      if (i + j === x + y) {
        arr[2].push(v)
      }
      if (x - y === i - y) {
        arr[3].push(v)
      }
    }
  }
  console.log(arr)
  for (let i = 0;i < 4;i ++) {
    let pre = arr[i][0];
    let count = 1;
    for (let j = 1;j < arr[i].length;j++) {
      if (arr[i][j] === pre) {
        count ++;
        if (count === MAXLINE && pre !== 0) {
          return true;
        }
      } else {
        pre = arr[i][j];
        count = 1;
      }
    }
  }
}
function init() {
  for (let i = 0;i < LENGTH; i++) {
    data[i] = Array(LENGTH).fill(0)
  }
  console.log(data)
  board.style.gridTemplateRows = `repeat(${LENGTH - 1}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${LENGTH - 1}, 1fr)`;
  board.style.width = `${WIDTH}px`
  board.style.height = `${WIDTH}px`
  setTimeout(() => width = getCellWidth(), 100)
}
