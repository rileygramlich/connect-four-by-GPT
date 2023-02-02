console.log('connected')

// Define the constants for the game
const ROWS = 6;
const COLUMNS = 7;
const CELL_SIZE = 50;
const RED = "red";
const YELLOW = "yellow";

// Define the state of the game
let board: string[][] = [];
let currentPlayer: string = RED;

// Initialize the game board
for (let row = 0; row < ROWS; row++) {
  board[row] = [];
  for (let col = 0; col < COLUMNS; col++) {
    board[row][col] = "";
  }
}

// Get references to the HTML elements
const game = document.getElementById("game")!;
const boardElement = document.getElementById("board")!;

// Render the game board
for (let row = 0; row < ROWS; row++) {
  const tr = document.createElement("tr");
  for (let col = 0; col < COLUMNS; col++) {
    const td = document.createElement("td");
    td.style.width = `${CELL_SIZE}px`;
    td.style.height = `${CELL_SIZE}px`;
    td.classList.add("cell");
    tr.appendChild(td);
  }
  boardElement.appendChild(tr);
}

// Add click handler for the cells
boardElement.addEventListener("click", (event) => {
  const target = event.target as HTMLTableCellElement;
  if (target.tagName === "TD") {
    const col = Array.from(target.parentElement!.children).indexOf(target);
    const row = Array.from(boardElement.children).indexOf(target.parentElement!);
    if (board[row][col] === "") {
      board[row][col] = currentPlayer;
      target.classList.add(currentPlayer);
      if (checkForWin(row, col)) {
        alert(`${currentPlayer} wins!`);
        // reset();
      } else {
        currentPlayer = currentPlayer === RED ? YELLOW : RED;
      }
    }
  }
});

// Check for a win
function checkForWin(row: number, col: number): boolean {
  // Check horizontally
  let count = 0;
  for (let i = col; i >= 0 && board[row][i] === currentPlayer; i--) {
    count++;
  }
  for (let i = col + 1; i < COLUMNS && board[row][i] === currentPlayer; i++) {
    count++;
  }
  if (count >= 4) {
    return true;
  }
  
  // Check vertically
  count = 0;
  for (let i = row; i >= 0 && board[i][col] === currentPlayer; i--) {
    count++;
  }
  for (let i = row + 1; i < ROWS && board[i][col] === currentPlayer; i++) {
    count++;
  }
  if (count >= 4) {
    return true;
  }
  return false;
}
  
  // Check diagonally (top left to bottom right)

