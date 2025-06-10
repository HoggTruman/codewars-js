// https://www.codewars.com/kata/5848565e273af816fb000449

var encryptThis = function(text) {
    return text.split(" ").map(w => {
        if (w.length === 0) {
        return "";
        }
        if (w.length === 1) {
            return w.charCodeAt(0).toString();
        }
        if (w.length === 2) {
            return w.charCodeAt(0).toString() + w[1];
        }

        return w.charCodeAt(0).toString() + w[w.length - 1] + w.substring(2, w.length - 1) + w[1];
    }).join(" ");    
}