// https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(string) {
    if (string.length === 0) {
        return false;
    }

    for (const c of string) {
        if ((c < '0' || c > '9') &&
            (c < 'a' || c > 'z') &&
            (c < 'A' || c > 'Z')) 
        {
            return false;
        }
    }

    return true;
}