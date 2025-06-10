// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
    const result = [];
    for (let k = a; k <= b; ++k) {
        if (isConsecutiveSum(k)) {
            result.push(k);
        }
    }

    return result;
}

function isConsecutiveSum(n) {
    const numStr = n.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; ++i) {
        sum += Number(numStr[i]) ** (i + 1);
    }

    return sum === n;
}
