// https://www.codewars.com/kata/6630da20f925eb3007c5a498

function blowCandles(str) {
    const candles = str.split("").map(x => Number(x));
    let blows = 0;

    for (let i = 0; i < candles.length; ++i) {
        if (candles[i] > 0) {
            blows += candles[i];
            if (candles[i + 1]) candles[i + 1] -= candles[i];
            if (candles[i + 2]) candles[i + 2] -= candles[i];
        }
    }

    return blows;
}