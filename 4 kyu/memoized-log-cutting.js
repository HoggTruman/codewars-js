// https://www.codewars.com/kata/54b058ce56f22dc6fe0011df/javascript

function cutLog(prices, n) {
    const memo = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            memo[i] = Math.max(memo[i], memo[i - j] + prices[j])
        }
    }

    return memo[n]; 
}