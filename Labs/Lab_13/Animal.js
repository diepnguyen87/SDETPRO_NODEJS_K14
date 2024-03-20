class Animal {

    constructor(speed) {
        this._speed = speed
    }

    static generateRandomSpeed(maxSpeed) {
        return Math.floor(Math.random() * maxSpeed) + 1
    }
    
    get speed() {
        return this._speed
    }
    
    set speed(speed) {
        this._speed = speed
    }
    
    toString() {
        return `Winner is ${this.constructor.name}, with speed: ${this.speed}`
    }
}
module.exports = Animal

