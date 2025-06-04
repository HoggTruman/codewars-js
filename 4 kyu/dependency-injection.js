// https://www.codewars.com/kata/5302d655be2a91068b0001fb


class DI {
    constructor(dependency) {
        this.dependency = dependency;
    }

    inject(func) {
        const dependencies = getDependencyNames(func).map(x => this.dependency[x]).filter(x => x);
        return () => func(...dependencies);
    }
}


function getDependencyNames(func) {
    const commentPattern = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    const argsPattern = /([^\s,]+)/g;
    const fStr = func.toString().replace(commentPattern, '');
    const result = fStr.slice(fStr.indexOf('(') + 1, fStr.indexOf(')')).match(argsPattern);
    return result? result: [];
}