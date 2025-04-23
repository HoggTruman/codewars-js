function cowboysDollars(boots) {
    const leftDollars = getDollarsInBoot(boots[0]);
    const rightDollars = getDollarsInBoot(boots[1]);

    return `This Rhinestone Cowboy has ${rightDollars} dollar bills in his right boot and ${leftDollars} in the left`;
}

function getDollarsInBoot(boot) {
    const dollarString = "[(1)]";
    let dollars = 0;
    let i = 0;
    while (i < boot.length && boot[i] !== "&") {
        if (boot.startsWith(dollarString, i)) {
            ++dollars;
            i += dollarString.length;
        }
        else {
            ++i;
        }
    }

    return dollars
}