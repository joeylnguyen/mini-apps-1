// MODEL
let turnChecker = 0;

let player1Score = 0;
let player2Score = 0;
let tieScore = 0;

let boardData = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const fillBoardData = (row, column, value) => {
  boardData[row][column] = value;
}

const checkWin = () => {
    let majorDiag = boardData[0][0] + boardData[1][1] + boardData[2][2];
    let minorDiag = boardData[0][2] + boardData[1][1] + boardData[2][0];
    let row1 = boardData[0][0] + boardData[0][1] + boardData[0][2];
    let row2 = boardData[1][0] + boardData[1][1] + boardData[1][2];
    let row3 = boardData[2][0] + boardData[2][1] + boardData[2][2];
    let col1 = boardData[0][0] + boardData[1][0] + boardData[2][0];
    let col2 = boardData[0][1] + boardData[1][1] + boardData[2][1];
    let col3 = boardData[0][2] + boardData[1][2] + boardData[2][2];

    let winCombos = [majorDiag, minorDiag, row1, row2, row3, col1, col2, col3];

    for (let i = 0; i <= winCombos.length; i++) {
      if (winCombos[i] === 3) {
        player1Score++;
        toggleWin('Player 1 wins!', 'block');
        break;
      } else if (winCombos[i] === -3) {
        player2Score++;
        toggleWin('Player 2 wins!', 'block');
        break;
      } else if (turnChecker === 9) {
        tieScore++;
        toggleWin('Tie!', 'block');
        break;
      }
    }
    toggleScore();
  }


//VIEW
const rows = document.getElementsByTagName('tr');
const playAgainButton = document.getElementById('playAgain');
const winMessage = document.getElementById('winner');
const p1ScoreDisplay = document.getElementById('player1Score');
const p2ScoreDisplay = document.getElementById('player2Score');
const tieScoreDisplay = document.getElementById('tieScore')

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
  for (var i = 0; i < rows.length; i++) {
    let cells = rows[i].children;
    for (var j = 0; j < cells.length; j++) {
      cells[j].innerHTML = "";
      boardData[i][j] = null;
    }
  }
}

const toggleScore = () => {
  p1ScoreDisplay.innerHTML = `Player 1 Score: ${player1Score}`;
  p2ScoreDisplay.innerHTML = `Player 2 Score: ${player2Score}`;
  tieScoreDisplay.innerHTML = `Tie: ${tieScore}`;
}

const toggleSymbol = (cell, turn) => (turn ? cell.innerHTML = 'X' : cell.innerHTML = 'O');

const toggleWin = (player, state) => {
  winMessage.innerHTML = player;
  winMessage.style.fontSize = '50px';
  winMessage.style.display = state;
}

// CONTROLLER
const handlePlayAgainButtonClick = (event) => {
  clearBoard();
  turnChecker = 0;
  toggleWin('Nah', 'none')
}

const handleCellClick = (event) => {
  let {row, column} = event.target.value;
  let turn = turnChecker % 2 === 0;
  let value;

  turn ? value = 1 : value = -1;
  turnChecker++;

  fillBoardData(row, column, value);
  toggleSymbol(event.target, turn);
  checkWin();
}

// INITIALIZE
window.onload = () => {
  createNewBoard();
}
