const Animal = require("./Animal")

class Dog extends Animal {
    //speed = km/h
    static maxSpeed = 60

    constructor(){
        super()
        this._name = Dog.name
        this._speed = super.getSpeed(Dog.maxSpeed)
    }
}
module.exports = Dog