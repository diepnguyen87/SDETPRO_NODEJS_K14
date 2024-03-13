const Animal = require("./Animal")

class Tiger extends Animal {

    //speed = km/h
    static maxSpeed = 100

    constructor(){
        super()
        this._name = Tiger.name
        this._speed = super.getSpeed(Tiger.maxSpeed)
    }
}
module.exports = Tiger