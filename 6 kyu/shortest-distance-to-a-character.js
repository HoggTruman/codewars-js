// https://www.codewars.com/kata/5c8bf3ec5048ca2c8e954bf3

function shortesttoChar(s, c) {
    const c_indices = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === c) {
            c_indices.push(i);
        }
    }

    const result = []

    if (c_indices.length > 0) {
        for (let i = 0; i < s.length; ++i) {
            let min = s.length;
            for (const x of c_indices) {
                min = Math.min(min, x > i? x - i: i - x);
            }

            result.push(min);
        }
    }    

    return result;
}