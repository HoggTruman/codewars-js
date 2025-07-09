// https://www.codewars.com/kata/5143cc9694a24abcd2000001

Object.defineProperty(Array.prototype, "containsAll", { value: function containsAll(a) {
    const set = new Set(this);
    return a.every(x => set.has(x));
}});