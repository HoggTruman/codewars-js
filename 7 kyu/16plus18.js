// https://www.codewars.com/kata/5effa412233ac3002a9e471d/javascript

function add(a, b) {
    let aStr = a.toString();
    let bStr = b.toString();

    aStr = aStr.padStart(bStr.length, "0");
    bStr = bStr.padStart(aStr.length, "0");

    let result = "";

    for (let i = 0; i < aStr.length; ++i) {
        result += Number(aStr[i]) + Number(bStr[i]);
    }

    return Number(result);
}