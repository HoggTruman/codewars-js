// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function parse(data) {
    const result = [];
    let value = 0;

    for (const command of data) {
        if (command === "i") ++value;
        else if (command === "d") --value;
        else if (command === "s") value *= value;
        else if (command === "o") result.push(value);
    }

    return result;
}
