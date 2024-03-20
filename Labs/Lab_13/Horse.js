const Animal = require("./Animal")

class Horse extends Animal {

    //speed = km/h
    static maxSpeed = 75

    constructor(){
        super(Animal.generateRandomSpeed(Horse.maxSpeed))
    }
}
module.exports = Horse