// https://www.codewars.com/kata/5970fce80ed776b94000008b

function lettersToNumbers(s) {
    return [...s].reduce((acc, c) => acc + getCharValue(c), 0); // .map(getCharValue)
}

function getCharValue(c) {
    if (c.match(/^[a-z]$/) !== null) {
        return c.charCodeAt(0) - "a".charCodeAt(0) + 1;
    }
    if (c.match(/^[A-Z]$/) !== null) {
        return (c.charCodeAt(0) - "A".charCodeAt(0) + 1) * 2;
    }
    if (c.match(/^\d$/) !== null) {
        return Number(c);
    }

    return 0;
}