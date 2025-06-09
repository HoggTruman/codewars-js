// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase=function(){
    return this
        .trim()
        .split(/\s+/)
        .map(w => w.charAt(0).toUpperCase() + w.substring(1))
        .join("");
}