// https://www.codewars.com/kata/5440f068cf362592e4000cd6/javascript

function sequence(fun){
    return {
        take(n) { return [...Array(n).keys()].map(k => fun(k)) },
        takeWhile(pred) {
            const result = [];
            let k = 0;
            let term = fun(k);
            while (pred(term)) {
                result.push(term);
                ++k;
                term = fun(k);
            }

            return result;
        }
    };
}