// https://www.codewars.com/kata/5a15b54bffe75f31990000e0

function findSeventhSonsOfSeventhSons(json) {
    return new Set(checkChildren(JSON.parse(json), false));
}

function checkChildren(parent, isSeventhSon) {
    let matches = [];

    for (let i = 0; i < parent.children.length; ++i) {
        const childIsSeventhSon = i === 6 && parent.children.every((x, i) => i > 6 || x.gender === "male");
        matches = matches.concat(checkChildren(parent.children[i], childIsSeventhSon));
        if (childIsSeventhSon && isSeventhSon) {
            matches.push(parent.children[i].name);
        }        
    }

    return matches;
}