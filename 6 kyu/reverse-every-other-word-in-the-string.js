// https://www.codewars.com/kata/58d76854024c72c3e20000de

function reverse(str){
    const words = str.trim().split(" ");
    
    for (let i = 0; i < words.length; ++i) {
        if (i % 2 !== 0) {
            words[i] = words[i].split('').reverse().join('');
        }
    }

    return words.join(" ");
}