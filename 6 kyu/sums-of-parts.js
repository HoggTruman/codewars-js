// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(ls) {
    const result = new Array(ls.length + 1);
    result[0] = ls.reduce((x, acc) => acc + x, 0);

    for (let i = 1; i < result.length; ++i) {
        result[i] = result[i - 1] - ls[i - 1];
    }

    return result;
}