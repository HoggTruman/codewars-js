// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa


function chooseBestSum(t, k, ls) {
    if (k > ls.length) {
        return null;
    }

    let best = 0;

    if (k === 1) {
        for (const d of ls) {
            if (d <= t && d > best) {
                best = d;
            }
        }
    }
    else {
        for (let i = 0; i < ls.length - k + 1; ++i) {
            if (ls[i] <= t) {
                let bestSubProblem = chooseBestSum(t - ls[i], k - 1, ls.slice(i + 1));
                if (bestSubProblem === null) {
                    continue;
                }

                best = Math.max(best, ls[i] + bestSubProblem);
            }            
        }
    }    
    
    return best > 0? best: null;
}