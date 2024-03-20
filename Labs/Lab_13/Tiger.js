const Animal = require("./Animal")

class Tiger extends Animal {

    //speed = km/h
    static maxSpeed = 100

    constructor(){
        super(Animal.generateRandomSpeed(Tiger.maxSpeed))
    }
}
module.exports = Tiger