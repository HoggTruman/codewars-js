// https://www.codewars.com/kata/53ffbba24e9e1408ee0008fd

function knapsack(capacity, items) {
    const result = new Array(items.length).fill(0);
    const valuePerUnit = items.map((x, i) => [i, x[1] / x[0]]);
    valuePerUnit.sort((a, b) => b[1] - a[1]);

    for (const [i, _] of valuePerUnit) {
        if (capacity >= items[i][0]) {
            result[i] = Math.floor(capacity / items[i][0]);
            capacity %= items[i][0];
        }        
    }

    return result;
}