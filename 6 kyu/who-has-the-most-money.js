// https://www.codewars.com/kata/528d36d7cc451cd7e4000339

function mostMoney(students) {
    let maxName = null;
    let maxMoney = -1;

    const getMoney = s => 5 * s.fives + 10 * s.tens + 20 * s.twenties;

    for (const student of students) {
        const money = getMoney(student);
        if (money > maxMoney) {
            maxName = student.name;
            maxMoney = money;
        }
    }

    if (students.length >= 2 && 
        getMoney(students[0]) == maxMoney && 
        getMoney(students[students.length - 1]) == maxMoney) {
        return "all";
    }

    return maxName;
}


class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
}