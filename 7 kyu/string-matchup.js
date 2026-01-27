// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4

function solve(a, b) {
    const counts = {};
    for (const word of a) {
        counts[word] = counts.hasOwnProperty(word) ? counts[word] + 1 : 1;
    }

    const result = [];
    for (let i = 0; i < b.length; ++i) {
        result[i] = counts.hasOwnProperty(b[i]) ? counts[b[i]] : 0;
    }

    return result;
}