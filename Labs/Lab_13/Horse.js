const Animal = require("./Animal")

class Horse extends Animal {

    //speed = km/h
    static maxSpeed = 75

    constructor(){
        super()
        this._name = Horse.name
        this._speed = super.getSpeed(Horse.maxSpeed)
    }
}
module.exports = Horse