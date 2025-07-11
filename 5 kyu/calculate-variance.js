// https://www.codewars.com/kata/5266fba01283974e720000fa

function variance(numbers) {
    return numbers.map(x => x * x).reduce((acc, x) => acc + x) / numbers.length
        - (numbers.reduce((acc, x) => acc + x) / numbers.length) ** 2;
}