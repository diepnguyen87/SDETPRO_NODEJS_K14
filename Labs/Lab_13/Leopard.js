const Animal = require("./Animal")

class Leopard extends Animal {

    //speed = km/h
    static maxSpeed = 120

    constructor() {
        super(Animal.generateRandomSpeed(Leopard.maxSpeed))
    }
}
module.exports = Leopard