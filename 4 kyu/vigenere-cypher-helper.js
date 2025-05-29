// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3

class VigenèreCipher {
    key;
    alphabet;
    shifts = {};

    constructor(key, abc) {
        this.key = key;
        this.alphabet = abc;

        for (let i = 0; i < key.length; ++i) {            
            this.shifts[key[i]] = abc.indexOf(key[i]);
        }
    }    

    encode(str) {
        let result = "";
        for (let i = 0; i < str.length; ++i) {
            const alphabetPosition = this.alphabet.indexOf(str[i]);
            const shift = this.shifts[this.key[i % this.key.length]];
            result += alphabetPosition !== -1? 
                this.alphabet[(alphabetPosition + shift) % this.alphabet.length]:
                str[i];
        }
        return result;
    }

    decode(str) {
        let result = "";
        for (let i = 0; i < str.length; ++i) {
            const alphabetPosition = this.alphabet.indexOf(str[i]);
            const shift = this.shifts[this.key[i % this.key.length]];
            result += alphabetPosition !== -1? 
                this.alphabet[(alphabetPosition - shift + this.alphabet.length) % this.alphabet.length]:
                str[i];
        }
        return result;
    };
}