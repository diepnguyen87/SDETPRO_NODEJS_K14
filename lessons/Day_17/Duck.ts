import FlyBehavior from "./FlyBehavior";
import QuackBehavior from "./QuackBehavior";

export default class Duck {
    protected flyBehavior: FlyBehavior;
    protected quackBehavior: QuackBehavior;

    constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
        this.quackBehavior = quackBehavior
        this.flyBehavior = flyBehavior
    }

    public performQuack(): void {
        this.quackBehavior.quack()
    }

    public performFly(): void{
        this.flyBehavior.fly()
    }
}