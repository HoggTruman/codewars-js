// https://www.codewars.com/kata/6846eb0f532729229195d975

function willRobotsCollide(x1, y1, x2, y2, commands) {
    const xDelta = Math.abs(x2 - x1);
    const yDelta = Math.abs(y2 - y1);
    let horizontalCount = 0;
    let verticalCount = 0;
    
    for (const command of commands) {
        if (command === "L" || command === "R") {
            ++horizontalCount;
        }
        else if (command === "U" || command === "D") {
            ++verticalCount;
        }
    }
    
    return horizontalCount >= xDelta && verticalCount >= yDelta;
}