/*
Author: Osvaldo

Terminal-based minesweeper game, requiring that you type code into the terminal to play the game
*/

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const board = [];

    for (let i = 0; i < numberOfRows; i++) {
        const row = [];

        for (let col = 0; col < numberOfColumns; col++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    const board = [];

    for (let i = 0; i < numberOfRows; i++) {
        const row = [];

        for (let col = 0; col < numberOfColumns; col++) {
            row.push(null);
        }

        board.push(row);
    }


    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

        if (board[randomRowIndex][randomColumnIndex] === null) {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }

    }

    return board;
};

const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(4, 8);
let bombBoard = generateBombBoard(4, 8, 7);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
