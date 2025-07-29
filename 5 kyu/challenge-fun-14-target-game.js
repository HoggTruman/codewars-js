// https://www.codewars.com/kata/58acf858154165363c00004e

function targetGame(vals) {
    const memo = new Array(vals.length);
    memo[0] = Math.max(0, vals[0]);
    memo[1] = Math.max(memo[0], vals[1]);

    for (let i = 2; i < memo.length; ++i) {
        memo[i] = Math.max(memo[i - 2] + vals[i], memo[i - 1]);
    }
  
    return memo[memo.length - 1];
}