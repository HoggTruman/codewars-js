// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil){
    let goodPower = 0;
    let evilPower = 0;

    const goodCounts = good.split(" ");
    goodPower += Number(goodCounts[0]) * 1;
    goodPower += Number(goodCounts[1]) * 2;
    goodPower += Number(goodCounts[2]) * 3;
    goodPower += Number(goodCounts[3]) * 3;
    goodPower += Number(goodCounts[4]) * 4;
    goodPower += Number(goodCounts[5]) * 10;

    const evilCounts = evil.split(" ");
    evilPower += Number(evilCounts[0]) * 1;
    evilPower += Number(evilCounts[1]) * 2;
    evilPower += Number(evilCounts[2]) * 2;
    evilPower += Number(evilCounts[3]) * 2;
    evilPower += Number(evilCounts[4]) * 3;
    evilPower += Number(evilCounts[5]) * 5;
    evilPower += Number(evilCounts[6]) * 10;
    
    if (goodPower === evilPower) {
        return "Battle Result: No victor on this battle field";
    }

    return goodPower > evilPower?
        "Battle Result: Good triumphs over Evil":
        "Battle Result: Evil eradicates all trace of Good";
}
