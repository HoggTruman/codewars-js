// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
    const words = text.toLowerCase().split(/[^a-zA-Z\']+/g).filter(i => i && i != "'");
    const counts = {};
    for (const word of words) {
        counts[word] = counts[word]? counts[word] + 1: 1;
    }

    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0]);
}