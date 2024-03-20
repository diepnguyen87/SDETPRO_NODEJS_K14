const Animal = require("./Animal")

class Dog extends Animal {
    //speed = km/h
    static maxSpeed = 60

    constructor(){
        super(Animal.generateRandomSpeed(Dog.maxSpeed))
    }
}
module.exports = Dog