// https://www.codewars.com/kata/59daf400beec9780a9000045

function nameInStr(str, name) {
    let iStr = 0;
    let iName = 0;

    while (iStr < str.length && iName < name.length) {
        if (str[iStr].toLowerCase() === name[iName].toLowerCase()) {
            ++iName;
        }
        ++iStr;
    }

    return iName >= name.length;
}