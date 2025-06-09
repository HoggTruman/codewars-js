// https://www.codewars.com/kata/557e8a141ca1f4caa70000a6

function isTriangleNumber(n) {
    return Math.sqrt(8 * n + 1) % 1 === 0;
}