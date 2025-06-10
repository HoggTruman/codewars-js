// https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
    for (let r = 1; r < ints.length; ++r) {
        for (let l = 0; l < r; ++l) {
            if (l !== r && ints[l] + ints[r] === s) {
                return [ints[l], ints[r]];
            }
        }
    }

    return undefined;
}

function sumPairs(ints, s) {
    const visited = new Set();
    for (const k of ints) {
        if (visited.has(s - k)) {
            return [s - k, k];
        }
        else {
            visited.add(k);
        }
    }

    return undefined;
}