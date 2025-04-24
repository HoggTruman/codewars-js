function tripledouble(num1, num2) {
    const triples = getRepeatedDigits(num1, 3);
    const doubles = getRepeatedDigits(num2, 2);

    for (let triple of triples) {
        if (doubles.has(triple)) {
            return 1;
        }
    }

    return 0;
}

function getRepeatedDigits(num, nRepeated) {
    const repeatedDigits = new Set();
    let currentDigit = -1;
    let consecutiveDigits = 0;

    while (num !== 0) {
        const digit = num % 10;
        if (currentDigit === digit) {
            ++consecutiveDigits;
            if (consecutiveDigits === nRepeated) {
                repeatedDigits.add(digit);
            }
        }
        else {
            currentDigit = digit;
            consecutiveDigits = 1;
        }

        num = Math.floor(num / 10);
    }

    return repeatedDigits;
}