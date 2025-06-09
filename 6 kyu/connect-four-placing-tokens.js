// https://www.codewars.com/kata/5864f90473bd9c4b47000057

function connectFourPlaceTokens(columns) {
    const board = new Array(6);
    for (let i = 0; i < board.length; ++i) {
        board[i] = Array(7).fill('-');
    }

    let isYellow = true;

    for (const col of columns) {
        for (let row = board.length - 1; row >= 0; --row) {
            if (board[row][col] === '-') {
                board[row][col] = isYellow? 'Y': "R";
                isYellow = !isYellow;
                break;
            }
        }
    }

    return board;
}