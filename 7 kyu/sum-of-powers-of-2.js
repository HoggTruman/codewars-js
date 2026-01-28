// https://www.codewars.com/kata/5d9f95424a336600278a9632

// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = n => {
    const result = [];
    let i = 0;
    while (n > 0) {
        if (n % 2 === 1) {
            result.push(2 ** i);
        }

        ++i;
        n = Math.floor(n / 2);
    }

    return result;
};
