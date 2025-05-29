// https://www.codewars.com/kata/587136ba2eefcb92a9000027

class SnakesLadders {
    activePlayer = 1;

    position = {
        1: 0,
        2: 0
    }

    jumps = {
        2: 38,
        7: 14,
        8: 31,
        15: 26,
        16: 6,
        21: 42,
        28: 84,
        36: 44,
        46: 25,
        49: 11,
        51: 67,
        62: 19,
        64: 60,
        71: 91,
        74: 53,
        78: 98,
        87: 94,
        89: 68,
        92: 88,
        95: 75,
        99: 80
    }

    play(die1, die2) {
        if (this.position[1] === 100 || this.position[2] === 100) {
            return "Game over!";
        }

        this.position[this.activePlayer] += die1 + die2;
        if (this.position[this.activePlayer] === 100) {
            return `Player ${this.activePlayer} Wins!`;
        }

        if (this.position[this.activePlayer] > 100) {
            this.position[this.activePlayer] = 100 - this.position[this.activePlayer] % 100;
        }

        if (this.jumps[this.position[this.activePlayer]]) {
            this.position[this.activePlayer] = this.jumps[this.position[this.activePlayer]];
        }

        const result = `Player ${this.activePlayer} is on square ${this.position[this.activePlayer]}`;

        if (die1 !== die2) {
            this.switchActivePlayer();
        }

        return result;
    }

    switchActivePlayer() {
        this.activePlayer = this.activePlayer === 1? 2: 1;
    }
};