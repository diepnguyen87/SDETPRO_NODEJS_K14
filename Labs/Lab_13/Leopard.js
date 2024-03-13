const Animal = require("./Animal")

class Leopard extends Animal {

    //speed = km/h
    static maxSpeed = 120

    constructor() {
        super()
        this._name = Leopard.name
        this._speed = super.getSpeed(Leopard.maxSpeed)
    }
}
module.exports = Leopard