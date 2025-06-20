// https://www.codewars.com/kata/536e9a7973130a06eb000e9f




function calculateDamage(yourType, opponentType, attack, defense) {
    const effectiveness = {
        fire: { fire: 0.5, grass: 2, water: 0.5, electric: 1 },
        grass: { fire: 0.5, grass: 0.5, water: 2, electric: 1 },
        water: { fire: 2, grass: 0.5, water: 0.5, electric: 0.5 },
        electric: { fire: 1, grass: 1, water: 2, electric: 0.5 }
    }

    return 50 * attack / defense * effectiveness[yourType][opponentType];
}