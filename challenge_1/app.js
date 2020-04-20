const cells = document.getElementsByTagName('td');
console.log(cells);


let turnChecker = false;

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', (e) => {
    turnChecker = !turnChecker;
    toggleSymbol(e.target, turnChecker);
  });
}

const checkTurn = () => {

}

const toggleSymbol = (cell, turn) => {
  console.log(turn);
  if (turn) {
    cell.innerHTML = 'X';
  } else {
    cell.innerHTML = 'O';
  }
}



// class Board {
//   constructor() {
//     this.boardValues = [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ];
//     this.table = document.createElement('table');
//     this.row = document.createElement('tr');
//     this.cell = document.createElement('td');
//   }



// }


// let table = document.createElement('table');
// let body = document.getElementById('root');


// // Add buttons to table
// let cell = document.createElement('td');




/* VIEW */
// Render Table to DOM
// const createNewBoard = () => {
//   let body = document.getElementById('root');
//   let table = document.getElementsByTagName('table');

//   clearBoard(body);

//   let newBoard = new Board();
//   body.appendChild(newBoard.table);
//   console.log('New board created!');
// }

// const clearBoard = (board) => {
//   console.log('Clearing board');
//   board.innerHTML = "";
// }

// //INITIALIZE
// window.onload = () => {
//   createNewBoard();
// }