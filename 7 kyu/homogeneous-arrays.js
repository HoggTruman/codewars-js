// https://www.codewars.com/kata/57ef016a7b45ef647a00002d

function filterHomogenous(arrays) {
    return arrays.filter(arr => arr.length > 0 && arr.every(x => typeof x === typeof arr[0]));
}