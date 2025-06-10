// https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data) {
    const result = [];
    for (let i = data.length - 8; i >= 0; i -= 8) {
        result.push(...data.slice(i, i + 8));
    }

    return result;
}