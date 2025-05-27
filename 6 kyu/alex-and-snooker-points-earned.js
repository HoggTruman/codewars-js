// https://www.codewars.com/kata/58b96d99404be9187c000003

function frame(balls) {
    const ballValues = {
        R: 1,
        Y: 2,
        G: 3,
        Bn: 4,
        Be: 5,
        P: 6,
        Bk: 7
    };

    let points = 0;
    const matches = balls.matchAll(/([A-Z][a-z]?)(\d*)/g);
    for (const match of matches) {
        const color = match[1];
        const count = match[2] !== ""? Number(match[2]): 1; 

        if (color.startsWith("W")) {
            return "Foul";
        }
        
        points += ballValues[color] * count;
    }

    return points <= 147? points: "invalid data";
}