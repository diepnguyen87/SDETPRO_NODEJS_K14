class Animal {

    constructor() {
        this._name = Animal.name
        this._speed = 50
    }

    getSpeed(maxSpeed) {
        return Math.floor(Math.random() * maxSpeed) + 1
    }

    toString() {
        return `Winner is ${this.name}, with speed: ${this.speed}`
    }

    get speed() {
        return this._speed
    }

    set speed(speed) {
        this._speed = speed
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }
}
module.exports = Animal