// https://www.codewars.com/kata/59e66e48fc3c499ec5000103

function solve(arr) {
    return arr.reduce((acc, x) => acc * (new Set(x)).size, 1)
};