// https://www.codewars.com/kata/696eacb39271f8aa43b61841

// 1. Toggle a bit at a given position
const toggleBit = (n, position) => {
    const mask = 1 << position;
    return n ^ mask;
};

// 2. Set a bit at a given position
const setBit = (n, position) => {
    const mask = 1 << position;
    return n | mask;
};

// 3. Clear a bit at a given position
const clearBit = (n, position) => {
    const mask = 1 << position;
    return n & ~mask;
};

// 4. Check if a bit at a given position is set
const isBitSet = (n, position) => {
    const mask = 1 << position;
    return (n & mask) != 0
};

// 5. Set multiple bits using a mask
const setMultipleBits = (n, mask) => {
    return n | mask;
};

// 6. Clear multiple bits using a mask
const clearMultipleBits = (n, mask) => {
    return n & ~mask;
};

// 7. Toggle multiple bits using a mask
const toggleMultipleBits = (n, mask) => {
    return n ^ mask;
};