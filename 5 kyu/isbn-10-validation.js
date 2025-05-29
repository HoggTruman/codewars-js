// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

function validISBN10(isbn) {
    if (isbn.length !== 10) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < isbn.length; ++i) {
        if (i === 9 && isbn[i] === 'X') {
            sum += (i + 1) * 10;
        }
        else if (isbn[i] >= '0' && isbn[i] <= '9') {
            sum += (i + 1) * Number(isbn[i]);
        }
        else {
            return false;
        }        
    }

    return sum % 11 === 0;
}