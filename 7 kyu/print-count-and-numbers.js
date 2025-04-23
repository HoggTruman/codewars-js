function countMe(data) {
    if (data === "") {
        return ""
    }

    let result = "";
    let currentCharacter = "";
    let characterStreak = 0;

    for (let i = 0; i < data.length; ++i) {
        if (data[i] < '0' || data[i] > '9') {
            return "";
        }

        if (data[i] !== currentCharacter) {
            if (currentCharacter !== "") {
                result += `${characterStreak}${currentCharacter}`;
            }
            
            characterStreak = 1;
            currentCharacter = data[i];
        }
        else {
            ++characterStreak;
        }
    }

    result += `${characterStreak}${currentCharacter}`;

    return result;
}