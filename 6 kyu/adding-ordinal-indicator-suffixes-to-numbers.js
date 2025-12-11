// https://www.codewars.com/kata/52dca71390c32d8fb900002b

function numberToOrdinal(n) {
    if (n == 0) {
        return "0";
    }
        
    if (n > 9 && Math.floor(n / 10) % 10 == 1) {
        return n + "th";
    }

    switch (n % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd";
        default:
            return n + "th";
    }
}
