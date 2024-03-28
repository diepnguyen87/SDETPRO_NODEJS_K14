import Duck from "./Duck";
import FlyNoWay from "./FlyNoWay";
import Squeak from "./Squeak";

export default class BabyDuck extends Duck {
    constructor() {
        super(new Squeak(), new FlyNoWay())
    }
}