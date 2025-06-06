// https://www.codewars.com/kata/5cb5ebc403c3ff477840393a

function anagrams(subjects, memories, players) {
    const points = [0, 0, 0, 0];

    for (const subject of subjects) {
        let firstPlayerPoints = 0;
        let secondPlayerPoints = 0;
        const usedWords = new Set();
        const subjectCounts = getLetterCounts(subject);

        for (const memory of memories[players[0]]) {
            if (memory === subject) {
                ++firstPlayerPoints;
            }
            else {
                usedWords.add(memory);
                const memoryCounts = getLetterCounts(memory);
                if (Object.keys(subjectCounts).every(x => memoryCounts[x] === subjectCounts[x])) {
                    firstPlayerPoints += 2;
                }
            }            
        }

        for (const memory of memories[players[1]]) {
            if (memory === subject) {
                ++secondPlayerPoints;
            }
            else if (!usedWords.has(memory)) {
                const memoryCounts = getLetterCounts(memory);
                if (Object.keys(subjectCounts).every(x => memoryCounts[x] === subjectCounts[x])) {
                    secondPlayerPoints += 3;
                }
            } 
        }

        if (firstPlayerPoints > secondPlayerPoints) {
            ++points[players[0]];
        }
        else if (secondPlayerPoints > firstPlayerPoints) {
            ++points[players[1]];
        }

        players = nextPlayers(players);
    }

    if (points[0] + points[1] > points[2] + points[3]) {
        return 0;
    }
    else if (points[0] + points[1] < points[2] + points[3]) {
        return 1;
    }

    return -1
}

function nextPlayers(players) {
    if (players[0] === 0 && players[1] == 2) return [2, 1];
    if (players[0] === 2 && players[1] == 1) return [1, 3];
    if (players[0] === 1 && players[1] == 3) return [3, 0];
    if (players[0] === 3 && players[1] == 0) return [0, 3];
    if (players[0] === 0 && players[1] == 3) return [2, 0];
    if (players[0] === 2 && players[1] == 0) return [1, 2];
    if (players[0] === 1 && players[1] == 2) return [3, 1];
    if (players[0] === 3 && players[1] == 1) return [0, 2];
}

function getLetterCounts(word) {
    const counts = {};
    for (const letter of word) {
        counts[letter] = counts[letter]? counts[letter] + 1: 1;
    }
    return counts;
}