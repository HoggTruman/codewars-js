// https://www.codewars.com/kata/52d3b68215be7c2d5300022f

function Event() {
    this.subscribers = [];

    this.subscribe = function(f) {
        this.subscribers.push(f)
    }

    this.unsubscribe = function(f) {
        this.subscribers = this.subscribers.filter(x => x !== f);
    }

    this.emit = function(...args) {
        for (const f of this.subscribers) {
            f(...args);
        }
    }
}
