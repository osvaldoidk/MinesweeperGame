/*
Author: Osvaldo

Terminal-based minesweeper game, requiring that you type code into the terminal to play the game
*/

const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const printBoard = board => {
    console.log(`Current Board: `);
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
};

printBoard(board);

board[2][2] = 'B';
printBoard(board);
