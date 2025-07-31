// https://www.codewars.com/kata/584ebd7a044a1520f20000d5

function range() {
    let start = 1;
    let end;
    let step = 1;

    if (arguments.length === 1) {
        end = arguments[0];
    }
    else if (arguments.length === 2) {
        start = arguments[0];
        end = arguments[1];
    }
    else if (arguments.length === 3) {
        start = arguments[0]
        step = arguments[1];
        end = arguments[2];
    }

    const result = [];

    for (let k = start; k <= end; k+= step) {
        result.push(k);
    }

    return result;
}