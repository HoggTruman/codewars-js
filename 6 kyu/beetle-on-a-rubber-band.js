// https://www.codewars.com/kata/6752e3775c762943cee4afcb

function f(L, S, A, N) {
    let beetlePos = 0;
    let bandLength = L;
    let totalWalked = 0;

    for (let day = 1; day <= N; ++day) {
        if (beetlePos === bandLength) {
            bandLength += S; 
            beetlePos += S;            
        }
        else {
            bandLength += S; 
            beetlePos *= beetlePos !== 0? bandLength / (bandLength - S): 0;
            if (bandLength - beetlePos < A) {
                totalWalked += bandLength - beetlePos;
                beetlePos = bandLength;
            }
            else {
                totalWalked += A;
                beetlePos += A;
            }
        }        
    }

    return [bandLength, totalWalked, beetlePos];
}