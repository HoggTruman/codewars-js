function decipherThis(str) {
    let words = str.split(" ");
    words = words.map(decipherWord);
    return words.join(" ");
}

function decipherWord(word) {
    let result = "";
    const charCode = word.match(/^\d+/g)[0];
    result += String.fromCharCode(charCode);

    if (word.length - charCode.length >= 2) {
        result += word[word.length - 1];
        result += word.substring(charCode.length + 1, word.length - 1);
        result += word[charCode.length];
    }
    else {
        result += word.substring(charCode.length);
    }

    return result;
}