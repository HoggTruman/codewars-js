// https://www.codewars.com/kata/58f6e7e455d7597dcc000045

function getPassword(grid, directions) {
    let password = "";
    let row = -1;
    let col = -1;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === 'x') {
                row = i;
                col = j;
            }
        }
    }

    for (const direction of directions) {
        if (direction.startsWith("left")) {
            --col;
        }
        else if (direction.startsWith("right")) {
            ++col;
        }
        else if (direction.startsWith("up")) {
            --row;
        }
        else if (direction.startsWith("down")) {
            ++row;
        }

        if (direction.endsWith("T")) {
            password += grid[row][col];
        }
    }

    return password;
}
