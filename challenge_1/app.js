const cells = document.getElementsByTagName('td');


let turnChecker = false;

const createNewBoard = () => {
  for (var i = 0; i < cells.length; i++) {
    console.log(cells[i].innerHTML);
    cells[i].style.fontSize = '50px';
    cells[i].style.width = '85px';
    cells[i].style.height = '85px';
    cells[i].style.textAlign = 'center';
    cells[i].addEventListener('click', (e) => clickHandler(e))
  };
}

const clickHandler = (event) => {
  turnChecker = !turnChecker;
  toggleSymbol(event.target, turnChecker);
}

const toggleSymbol = (cell, turn) => (turn ? cell.innerHTML = 'X' : cell.innerHTML = 'O')

window.onload = () => {
    createNewBoard();
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