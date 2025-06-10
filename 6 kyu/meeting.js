// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
    return s.split(";")
        .map(x => {
            const [first, last] = x.split(":");
            return `(${last}, ${first})`.toUpperCase();})
        .sort((a, b) => a.localeCompare(b))
        .join("");
}