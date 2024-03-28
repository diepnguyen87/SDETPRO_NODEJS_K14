import Duck from "./Duck";
import FlyWithWing from "./FlyWithWing";
import Quack from "./Quack";

export default class MallardDuck extends Duck {

    constructor() {
        super(new Quack(), new FlyWithWing())
    }
}