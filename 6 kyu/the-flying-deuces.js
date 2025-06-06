// https://www.codewars.com/kata/678808b7efa4c0bcffc9cf22

function simulate(initial, steps, stan, ollie) {
    let legion = [...initial];

    for (let step = 1; step <= steps; ++step) {
        const nextLegion = new Array(legion.length);
        for (let i = 0; i < legion.length; ++i) {
            if (i === stan || i === ollie) {
                nextLegion[i] = legion[i];
            }
            else if (i === 0) {
                nextLegion[i] = legion[i + 1];
            }
            else if (i === legion.length - 1) {
                nextLegion[i] = legion[i - 1];
            }
            else if (legion[i - 1] === legion[i + 1]) {
                nextLegion[i] = legion[i - 1];
            }
            else {
                const neighborAverage = Math.floor((legion[i - 1] + legion[i + 1]) / 2);
                nextLegion[i] = neighborAverage >= legion[i]?  legion[i] + 1: legion[i] - 1;
            }
        }

        legion = nextLegion;
    }

    return legion;
}