// MODEL
let turnChecker = false;

let player1Score = 0;
let player2Score = 0;
let tieScore = 0;

let boardData = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const fillBoardData = (row, column, value) => {
  console.log(boardData);
  boardData[row][column] = value;
}

//VIEW

const rows = document.getElementsByTagName('tr');
const playAgainButton = document.getElementById('playAgain');

playAgainButton.addEventListener('click', (e) => handlePlayAgainButtonClick(e));

const createNewBoard = () => {
  for (var i = 0; i < rows.length; i++) {
    let cells = rows[i].children;
    for (var j = 0; j < cells.length; j++) {
      cells[j].style.fontSize = '50px';
      cells[j].style.width = '85px';
      cells[j].style.height = '85px';
      cells[j].style.textAlign = 'center';
      cells[j].value = {row: i, column: j};
      cells[j].addEventListener('click', (e) => {handleCellClick(e)})
    }
  };
}

const clearBoard = () => {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}

const toggleSymbol = (cell, turn) => (turn ? cell.innerHTML = 'X' : cell.innerHTML = 'O')

// CONTROLLER
const handlePlayAgainButtonClick = (event) => {
  clearBoard();
  turnChecker = false;

}

const handleCellClick = (event) => {
  let {row, column} = event.target.value;

  turnChecker = !turnChecker;
  let value;
  turnChecker ? value = 1 : value = 0;

  fillBoardData(row, column, value);
  toggleSymbol(event.target, turnChecker);
}


// INITIALIZE
window.onload = () => {
  createNewBoard();
}
