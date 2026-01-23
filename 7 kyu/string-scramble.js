// https://www.codewars.com/kata/5822d89270ca28c85c0000f3

function scramble(str, arr) {
    const resultArr = new Array(str.length);

    for (let i = 0; i < arr.length; ++i) {
        resultArr[arr[i]] = str[i];
    }

    return resultArr.join("");
};