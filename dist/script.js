"use strict";
console.log("connected");
const ROWS = 6;
const COLUMNS = 7;
const CELL_SIZE = 50;
const RED = "red";
const YELLOW = "yellow";
let board = [];
let currentPlayer = RED;
for (let row = 0; row < ROWS; row++) {
    board[row] = [];
    for (let col = 0; col < COLUMNS; col++) {
        board[row][col] = "";
    }
}
const game = document.getElementById("game");
const boardElement = document.getElementById("board");
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
boardElement.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "TD") {
        const col = Array.from(target.parentElement.children).indexOf(target);
        const row = Array.from(boardElement.children).indexOf(target.parentElement);
        if (board[row][col] === "") {
            board[row][col] = currentPlayer;
            target.classList.add(currentPlayer);
            if (checkForWin(row, col)) {
                alert(`${currentPlayer} wins!`);
            }
            else {
                currentPlayer = currentPlayer === RED ? YELLOW : RED;
            }
        }
    }
});
function checkForWin(row, col) {
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
    count = 0;
    let r = row - col;
    let c = 0;
    if (r < 0) {
        c = -r;
        r = 0;
    }
    while (r < 6 && c < 7) {
        if (board[r][c] === currentPlayer) {
            count++;
            if (count === 4) {
                return true;
            }
        }
        else {
            count = 0;
        }
        r++;
        c++;
    }
    count = 0;
    r = row + col;
    c = 0;
    if (r > 5) {
        c = r - 5;
        r = 5;
    }
    while (r >= 0 && c < 7) {
        if (board[r][c] === currentPlayer) {
            count++;
            if (count === 4) {
                return true;
            }
        }
        else {
            count = 0;
        }
        r--;
        c++;
    }
    return false;
}
//# sourceMappingURL=script.js.map