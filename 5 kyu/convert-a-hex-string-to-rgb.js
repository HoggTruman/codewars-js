// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
    return {
        r: Number("0x" + hexString.substring(1, 3)),
        g: Number("0x" + hexString.substring(3, 5)), 
        b: Number("0x" + hexString.substring(5)),
    }
}