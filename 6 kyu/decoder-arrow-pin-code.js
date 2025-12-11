// https://www.codewars.com/kata/69178eb3a22411a3aab31347

function decArrowPinCode(arrowStr) {
    const directions = {
        0: { "←": -1, "↑": 1, "→": -1, "↓": -1 },
        1: { "←": -1, "↑": 4, "→": 2, "↓": 0 },
        2: { "←": 1, "↑": 5, "→": 3, "↓": -1 },
        3: { "←": 2, "↑": 6, "→": -1, "↓": -1 },
        4: { "←": -1, "↑": 7, "→": 5, "↓": 1 },
        5: { "←": 4, "↑": 8, "→": 6, "↓": 2 },
        6: { "←": 5, "↑": 9, "→": -1, "↓": 3 },
        7: { "←": -1, "↑": -1, "→": 8, "↓": 4 },
        8: { "←": 7, "↑": -1, "→": 9, "↓": 5 },
        9: { "←": 8, "↑": -1, "→": -1, "↓": 6 },
    };

    let current = Number(arrowStr[0]);
    const result = [current];    

    for (let i = 1; i < arrowStr.length; ++i) {
        if (arrowStr[i] === '*') {
            const count = arrowStr[i + 1] - '0';
            for (let k = 1; k <= count; ++k) {
                result.push(current);
            }
            ++i;
        }
        else {
            current = directions[current][arrowStr[i]];
            if (current === -1) {
                return [];
            }
            result.push(current);
        }
    }

    return result;
}